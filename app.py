import os
from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt_extended import JWTManager
from marshmallow import ValidationError

from ma import ma
from db import db
from blacklist import BLACKLIST
from resources.user import UserRegister, User, UserLogin, UserLogout, TokenRefresh
from resources.confirmation import Confirmation, ConfirmationByUser
from resources.cadeira import Cadeira, CadeiraList, CadeiraId, CadeiraGeral
from resources.curso import Curso, CursoList, CursoId, CursoGeral
from resources.horario import HorarioId, HorarioGeral
from resources.sala import SalaId, SalaGeral

from routes.main import main
from routes.administracao.cadeiras import admCadeiras
from routes.administracao.utilizadores import admUtilizadores
from routes.administracao.cursos import admCursos
from routes.administracao.horarios import admHorarios
from routes.administracao.salas import admSalas

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["JWT_BLACKLIST_ENABLED"] = True
app.config["JWT_BLACKLIST_TOKEN_CHECKS"] = ["access", "refresh"]
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False
app.secret_key = os.environ.get("APP_SECRET_KEY")  # app.config['JWT_SECRET_KEY']
api = Api(app)


# execute after the first request
@app.before_request
def create_tables():
    db.create_all()


@app.errorhandler(ValidationError)
def handle_marshmallow_validation(err):  # except ValidationError as err
    return jsonify(err.messages), 400


jwt = JWTManager(app)


@jwt.user_claims_loader
def add_claims_to_jwt(identity):
    return {
        'identity': identity["identity"],
        'access': identity["access"]
    }


@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    return decrypted_token["jti"] in BLACKLIST


@jwt.expired_token_loader
def expired_token_callback():
    return (
        jsonify({"desciption": "The token has expired.", "error": "token_expired"}),
        401,
    )


@jwt.invalid_token_loader
def invalid_token_callback(error):
    return (
        jsonify(
            {"desciption": "Signature verification failed.", "error": "invalid_token"}
        ),
        401,
    )


@jwt.unauthorized_loader
def missing_token_callback(error):
    return (
        jsonify(
            {
                "desciption": "Request does not contain an access token..",
                "error": "authorization_required",
            }
        ),
        401,
    )


@jwt.needs_fresh_token_loader
def token_not_fresh_callback():
    return (
        jsonify(
            {"desciption": "The token is not fresh.", "error": "fresh_token_required"}
        ),
        401,
    )


@jwt.revoked_token_loader
def revoked_token_callback():
    return (
        jsonify(
            {"desciption": "The token has been revoked.", "error": "token_revoked"}
        ),
        401,
    )


api.add_resource(Curso, "/curso")
api.add_resource(CursoList, "/cursos")
api.add_resource(CursoGeral, "/cursos_")
api.add_resource(CursoId, "/cursos_/<int:curso_id>")

api.add_resource(Cadeira, "/cadeira")
api.add_resource(CadeiraList, "/cadeiras")
api.add_resource(CadeiraGeral, "/cadeiras_")
api.add_resource(CadeiraId, "/cadeiras_/<int:cadeira_id>")

api.add_resource(SalaGeral, "/salas_")
api.add_resource(SalaId, "/salas_/<int:sala_id>")

api.add_resource(HorarioId, "/horarios_/<int:id>")
api.add_resource(HorarioGeral, "/horarios_")

api.add_resource(UserRegister, "/register")
api.add_resource(User, "/user/<int:user_id>")
api.add_resource(UserLogin, "/login")
api.add_resource(UserLogout, "/logout")
api.add_resource(TokenRefresh, "/refresh")
api.add_resource(Confirmation, "/user_confirm/<string:confirmation_id>")
api.add_resource(ConfirmationByUser, "/confirmation/user/<int:user_id>")

app.register_blueprint(main)
app.register_blueprint(admUtilizadores)
app.register_blueprint(admCadeiras)
app.register_blueprint(admCursos)
app.register_blueprint(admHorarios)
app.register_blueprint(admSalas)

if __name__ == "__main__":
    db.init_app(app)
    ma.init_app(app)
    app.run(port=5000, debug=True)
