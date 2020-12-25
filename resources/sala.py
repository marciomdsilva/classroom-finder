from flask_restful import Resource
from flask import request
from schemas.sala import SalaSchema
from flask_jwt_extended import (
    jwt_required,
    get_jwt_claims,
    jwt_optional,
    fresh_jwt_required,
)
from models.sala import SalaModel
from libs.strings import gettext

sala_schema = SalaSchema()
sala_list_schema = SalaSchema(many=True)

# ALTERAÇÕES
class SalaId(Resource):
    @classmethod
    @jwt_optional
    def get(cls, sala_id: int):
        sala = SalaModel.find_by_id(sala_id)
        if sala:
            return sala_schema.dump(sala), 200
        return {"message": gettext("sala_not_found")}, 404

    @classmethod
    @jwt_required
    def put(cls, sala_id: int):

        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        sala = SalaModel.find_by_id(sala_id)
        if sala:
            sala_json = request.get_json()
            sala.identificacao = sala_json["identificacao"]
            sala.andar = sala_json["andar"]
            sala.lotacao = sala_json["lotacao"]
            sala.save_to_db()
            return sala_schema.dump(sala), 200
        else:
            return {"message": gettext("sala_not_found")}, 404

    @classmethod
    @jwt_required
    def delete(cls, sala_id: int):
        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        sala = SalaModel.find_by_id(sala_id)
        if sala:
            sala.delete_from_db()
            return {"message": gettext("sala_deleted")}, 200
        return {"message": gettext("sala_not_found")}, 404


class SalaGeral(Resource):
    @classmethod
    @jwt_optional
    def get(cls):
        if len(request.args) == 0 or (request.args.get("search") is None and request.args.get("search") is None):
            return {"salas": sala_list_schema.dump(SalaModel.find_all())}, 200
        else:
            return {"salas": sala_list_schema.dump(SalaModel.find_all(request.args['search']))}, 200

    @classmethod
    @fresh_jwt_required
    def post(cls):
        sala_json = request.get_json()

        sala = sala_schema.load(sala_json)

        try:
            sala.save_to_db()
        except:
            return {"message": gettext("sala_error_inserting")}, 500  # Internal Server Error
        return sala_schema.dump(sala), 201
