from flask_restful import Resource
from flask import request
from marshmallow import ValidationError
from schemas.cadeira import CadeiraSchema
from flask_jwt_extended import (
    jwt_required,
    get_jwt_claims,
    jwt_optional,
    get_jwt_identity,
    fresh_jwt_required,
)
from models.cadeira import CadeiraModel
from libs.strings import gettext


cadeira_schema = CadeiraSchema()
cadeira_list_schema = CadeiraSchema(many=True)


class Cadeira(Resource):
    @classmethod
    @jwt_required
    def get(cls):
        cadeira_json = request.get_json()
        name = cadeira_json["name"]

        cadeira = CadeiraModel.find_by_name(name)
        if cadeira:
            return cadeira_schema.dump(cadeira), 200
        return {"message": gettext("cadeira_not_found")}, 404

    @classmethod
    @fresh_jwt_required
    def post(cls):
        cadeira_json = request.get_json()
        name = cadeira_json["name"]

        if CadeiraModel.find_by_name(name):
            return {"message": gettext("cadeira_name_exists").format(name)}, 400

        cadeira_json["name"] = name

        cadeira = cadeira_schema.load(cadeira_json)

        try:
            cadeira.save_to_db()
        except:
            return {"message": gettext("cadeira_error_inserting")}, 500  # Internal Server Error
        return cadeira_schema.dump(cadeira), 201

    @classmethod
    @jwt_required
    def delete(cls):
        cadeira_json = request.get_json()
        name = cadeira_json["name"]

        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        cadeira = CadeiraModel.find_by_name(name)
        if cadeira:
            cadeira.delete_from_db()
            return {"message": gettext("cadeira_deleted")}, 200
        return {"message": gettext("cadeira_not_found")}, 404

    @classmethod
    def put(cls):
        cadeira_json = request.get_json()
        name = cadeira_json["name"]
        cadeira = CadeiraModel.find_by_name(name)

        if cadeira:
            cadeira.curso_id = cadeira_json["curso_id"]
        else:
            cadeira_json["name"] = name
            cadeira = cadeira_schema.load(cadeira_json)

        cadeira.save_to_db()
        return cadeira_schema.dump(cadeira), 200


class CadeiraList(Resource):
    @classmethod
    @jwt_optional
    def get(cls):
        user_id = get_jwt_identity()
        cadeiras = cadeira_list_schema.dump(CadeiraModel.find_all())
        if user_id:
            return {"cadeiras": cadeiras}, 200
        return {"cadeiras": [cadeira["name"] for cadeira in cadeiras],
                "message": "More data available if you log in "}, 200
