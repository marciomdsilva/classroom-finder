import copy
import traceback
from flask_restful import Resource
from flask import request
from werkzeug.security import safe_str_cmp
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_refresh_token_required,
    get_jwt_identity,
    jwt_required,
    get_raw_jwt, get_jwt_claims,
)

from models.cadeira import CadeiraModel
from models.curso import CursoModel
from models.user import UserModel
from schemas.user import UserSchema
from blacklist import BLACKLIST
from libs.mailgun import MailGunException
from libs.strings import gettext
from models.confirmation import ConfirmationModel

user_schema = UserSchema()
user_list_schema = UserSchema(many=True)


class UserRegister(Resource):
    @classmethod
    def post(cls):
        userData = copy.deepcopy(request.get_json())
        if 'cursos' in userData:
            del userData['cursos']
        if 'cadeiras' in userData:
            del userData['cadeiras']
        user = user_schema.load(userData)

        if UserModel.find_by_username(user.username):
            return {"message": gettext("user_username_exists")}, 400

        if UserModel.find_by_email(user.email):
            return {"message": gettext("user_email_exists")}, 400

        try:
            if 'cursos' in request.get_json():
                for curso in request.get_json()['cursos']:
                    user.cursos.append(CursoModel.find_by_id(curso))
            if 'cadeiras' in request.get_json():
                for cadeira in request.get_json()['cadeiras']:
                    user.cadeiras.append(CadeiraModel.find_by_id(cadeira))
            user.save_to_db()

            confirmation = ConfirmationModel(user.id)
            confirmation.save_to_db()
            user.send_confirmation_email()
            return {"message": gettext("user_registered")}, 201
        except MailGunException as e:
            user.delete_from_db()
            return {"message": str(e)}, 500
        except:  # fail to save user to db
            traceback.print_exc()
            user.delete_from_db()
            return {"message": gettext("user_error_creating")}, 500


class User(Resource):
    @classmethod
    @jwt_required
    def put(cls, user_id: int):
        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        user = UserModel.find_by_id(user_id)
        if user:
            if 'cursos' in request.get_json():
                user.cursos.clear()
                for curso in request.get_json()['cursos']:
                    user.cursos.append(CursoModel.find_by_id(curso))

            if 'cadeiras' in request.get_json():
                user.cadeiras.clear()
                for cadeira in request.get_json()['cadeiras']:
                    user.cadeiras.append(CadeiraModel.find_by_id(cadeira))

            if 'name' in request.get_json():
                user.name = request.get_json()['name']
            if 'password' in request.get_json():
                user.password = request.get_json()['password']
            if 'access' in request.get_json():
                user.access = request.get_json()['access']

            user.save_to_db()
            return user_schema.dump(user), 200
        else:
            return {"message": gettext("user_not_found")}, 404

    @classmethod
    def get(cls, user_id: int):
        user = UserModel.find_by_id(user_id)
        if not user:
            return {"message": gettext("user_not_found")}, 404
        return user_schema.dump(user), 200

    @classmethod
    @jwt_required
    def delete(cls, user_id: int):
        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        user = UserModel.find_by_id(user_id)
        if not user:
            return {"message": gettext("user_not_found")}, 404
        user.delete_from_db()
        return {"message": gettext("user_deleted")}, 200

class UserGeral(Resource):
    @classmethod
    def get(cls):
        if len(request.args) == 0 or (request.args.get("search") is None and request.args.get("search") is None):
            return {"users": user_list_schema.dump(UserModel.find_all())}, 200
        else:
            return {"users": user_list_schema.dump(UserModel.find_all(request.args['search']))}, 200


class UserLogin(Resource):
    @classmethod
    def post(cls):
        # get data
        user_json = request.get_json()
        user_data = user_schema.load(user_json, partial=(
            "email", "name",))  # ignora o email e o nome apenas precisa do nome de utilizador e password

        # find user in database
        user = UserModel.find_by_username(user_data.username)
        # check password
        if user and safe_str_cmp(user.password, user_data.password):
            # create acess token
            access_token = create_access_token(identity={"access": user.access, "identity": user.id}, fresh=True)
            # create refresh token
            refresh_token = create_refresh_token(user.id)
            return {"access_token": access_token, "refresh_token": refresh_token, "access": user.access, "userId": user.id}, 200


        return {"message": gettext("user_invalid_credentials")}, 401


class UserLogout(Resource):
    @classmethod
    @jwt_required
    def post(cls):
        jti = get_raw_jwt()["jti"]  # jti is a"JWT ID", a unique identifier for a JWT.
        current_user = get_jwt_identity()
        BLACKLIST.add(jti)
        return {"message": gettext("user_logged_out").format(current_user['identity'])}, 200


class TokenRefresh(Resource):
    @classmethod
    @jwt_refresh_token_required
    def post(cls):
        current_user = get_jwt_identity()
        new_token = create_access_token(identity=current_user, fresh=False)
        return {"access_token": new_token}, 200
