from flask_restful import Resource
from flask import request
from models.curso import CursoModel
from schemas.curso import CursoSchema
from libs.strings import gettext
from flask_jwt_extended import (
    jwt_required,
    get_jwt_claims,
    jwt_optional,
    get_jwt_identity,
    fresh_jwt_required,
)

curso_schema = CursoSchema()
curso_list_schema = CursoSchema(many=True)


class Curso(Resource):
    @classmethod
    def get(cls):
        curso_json = request.get_json()
        name = curso_json["name"]

        curso = CursoModel.find_by_name(name)
        if curso:
            return curso_schema.dump(curso), 200
        return {"message": gettext("curso_not_found")}, 404

    @classmethod
    def post(cls):
        curso_json = request.get_json()
        name = curso_json["name"]

        if CursoModel.find_by_name(name):
            return {"message": gettext("curso_name_exists").format(name)}, 400

        curso = CursoModel(name=name)
        try:
            curso.save_to_db()
        except:
            return {"message": gettext("curso_error_inserting")}, 500
        return curso_schema.dump(curso), 201

    @classmethod
    @jwt_required
    def delete(cls):
        curso_json = request.get_json()
        name = curso_json["name"]

        claims = get_jwt_claims()
        if not claims["is_admin"]:
            return {"message": "Admin previlege required"}, 401

        curso = CursoModel.find_by_name(name)
        if curso:
            try:
                curso.delete_from_db()
                return {"message": gettext("curso_deleted")}, 200
            except:
                return {"message": gettext("curso_dependency")}, 400
        return {"message": gettext("curso_not_found")}, 404


class CursoList(Resource):
    @classmethod
    def get(cls):
        return {"cursos": curso_list_schema.dump(CursoModel.find_all())}, 200


# ALTERAÇÕES
class CursoId(Resource):
    @classmethod
    def get(cls, curso_id: int = None):
        if 0 == curso_id:
            return {"cursos": curso_list_schema.dump(CursoModel.find_all())}, 200

        curso = CursoModel.find_by_id(curso_id)
        if not curso:
            return {"message": gettext("curso_not_found")}, 404
        return curso_schema.dump(curso), 200

    @classmethod
    @jwt_required
    def put(cls, curso_id: int):
        claims = get_jwt_claims()
        if not claims["is_admin"]:
            return {"message": "Admin previlege required"}, 401

        curso_json = request.get_json()
        name = curso_json["name"]
        if not CursoModel.find_by_id(curso_id):
            return {"message": gettext("curso_name_exists").format(name)}, 400

        curso = CursoModel.find_by_id(curso_id)
        curso.name = name
        try:
            curso.save_to_db()
        except:
            return {"message": gettext("curso_error_inserting")}, 500
        return curso_schema.dump(curso), 201

    @classmethod
    @jwt_required
    def delete(cls, curso_id: int):
        claims = get_jwt_claims()
        if not claims["is_admin"]:
            return {"message": "Admin previlege required"}, 401

        curso = CursoModel.find_by_id(curso_id)
        if curso:
            try:
                curso.delete_from_db()
                return {"message": gettext("curso_deleted")}, 200
            except:
                return {"message": gettext("curso_dependency")}, 400
        return {"message": gettext("curso_not_found")}, 404


class CursoGeral(Resource):
    @classmethod
    @jwt_required
    def post(cls):
        claims = get_jwt_claims()
        if not claims["is_admin"]:
            return {"message": "Admin previlege required"}, 401

        curso_json = request.get_json()
        name = curso_json["name"]
        if CursoModel.find_by_name(name):
            return {"message": gettext("curso_name_exists").format(name)}, 400

        curso = CursoModel(name=name)
        try:
            curso.save_to_db()
        except:
            return {"message": gettext("curso_error_inserting")}, 500
        return curso_schema.dump(curso), 201

    @classmethod
    def get(cls):
        if len(request.args) == 0 or request.args.get("search") is None:
            return {"cursos": curso_list_schema.dump(CursoModel.find_all())}, 200
        else:
            return {"cursos": curso_list_schema.dump(CursoModel.find_all(request.args['search']))}, 200
