import os
import time
import os.path

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
            sala.identificacao = request.form["identificacao"]
            sala.andar = request.form["andar"]
            sala.lotacao = request.form["lotacao"]
            if 'mapa0' in request.files and request.files["mapa2"].filename != "mapa0":
                file = request.files['mapa0']
                filenameSplitted = file.filename.split(".")
                filename = str(time.time()) + "0." + filenameSplitted[len(filenameSplitted) - 1]
                file.save(os.path.join("static/salas", filename))
                if os.path.exists("static/" + sala.mapa0):
                    os.remove("static/" + sala.mapa0)
                sala.mapa0 = "salas/" + filename
            if 'mapa1' in request.files and request.files["mapa2"].filename != "mapa1":
                file = request.files['mapa1']
                filenameSplitted = file.filename.split(".")
                filename = str(time.time()) + "1." + filenameSplitted[len(filenameSplitted) - 1]
                file.save(os.path.join("static/salas", filename))
                if os.path.exists("static/" + sala.mapa1):
                    os.remove("static/" + sala.mapa1)
                sala.mapa1 = "salas/" + filename
            if 'mapa2' in request.files and request.files["mapa2"].filename != "mapa2":
                file = request.files['mapa2']
                filenameSplitted = file.filename.split(".")
                filename = str(time.time()) + "2." + filenameSplitted[len(filenameSplitted) - 1]
                file.save(os.path.join("static/salas", filename))
                if os.path.exists("static/" + sala.mapa2):
                    os.remove("static/" + sala.mapa2)
                sala.mapa2 = "salas/" + filename
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
        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        sala = SalaModel(request.form["identificacao"], request.form["andar"], request.form["lotacao"])

        if 'mapa0' in request.files:
            file = request.files['mapa0']
            filenameSplitted = file.filename.split(".")
            filename = str(time.time()) + "0." + filenameSplitted[len(filenameSplitted) - 1]
            file.save(os.path.join("static/salas", filename))
            sala.mapa0 = "salas/" + filename
        if 'mapa1' in request.files:
            file = request.files['mapa1']
            filenameSplitted = file.filename.split(".")
            filename = str(time.time()) + "1." + filenameSplitted[len(filenameSplitted) - 1]
            file.save(os.path.join("static/salas", filename))
            sala.mapa1 = "salas/" + filename
        if 'mapa2' in request.files:
            file = request.files['mapa2']
            filenameSplitted = file.filename.split(".")
            filename = str(time.time()) + "2." + filenameSplitted[len(filenameSplitted) - 1]
            file.save(os.path.join("static/salas", filename))
            sala.mapa2 = "salas/" + filename
        sala.save_to_db()
        try:
            sala.save_to_db()
        except:
            return {"message": gettext("sala_error_inserting")}, 500  # Internal Server Error
        return sala_schema.dump(sala), 201
