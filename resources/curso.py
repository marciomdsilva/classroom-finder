from flask_restful import Resource
from models.curso import CursoModel
from schemas.curso import CursoSchema
from libs.strings import gettext


curso_schema = CursoSchema()
curso_list_schema = CursoSchema(many=True)


class Curso(Resource):
    @classmethod
    def get(cls, name: str):
        curso = CursoModel.find_by_name(name)
        if curso:
            return curso_schema.dump(curso), 200
        return {"message": gettext("curso_not_found")}, 404

    @classmethod
    def post(cls, name: str):
        if CursoModel.find_by_name(name):
            return {"message": gettext("curso_name_exists").format(name)}, 400

        curso = CursoModel(name=name)
        try:
            curso.save_to_db()
        except:
            return {"message": gettext("curso_error_inserting")}, 500
        return curso_schema.dump(curso), 201

    @classmethod
    def delete(cls, name: str):
        curso = CursoModel.find_by_name(name)
        if curso:
            curso.delete_from_db()

        return {"message": gettext("curso_deleted")}


class CursoList(Resource):
    @classmethod
    def get(cls):
        return {"cursos": curso_list_schema.dump(CursoModel.find_all())}, 200