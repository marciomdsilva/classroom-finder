from datetime import datetime, timedelta

from flask_restful import Resource
from flask import request
from marshmallow import ValidationError

from models.user import UserModel
from schemas.horario import HorarioSchema
from flask_jwt_extended import (
    jwt_required,
    get_jwt_claims,
    jwt_optional,
    get_jwt_identity,
    fresh_jwt_required,
)
from models.horario import HorarioModal
from libs.strings import gettext
from schemas.user import UserSchema

horario_schema = HorarioSchema()
horario_list_schema = HorarioSchema(many=True)

user_schema = UserSchema()

class HorarioId(Resource):
    @classmethod
    @jwt_required
    def get(cls, id: int):  # CADEIRA ID
        horarios = HorarioModal.find_by_cadeira(id)

        if horarios:
            data = horario_list_schema.dump(horarios)
            for d in data:
                x = d['data'].split("/")
                d['data'] = x[2] + "/" + x[1] + "/" + x[0]
            return horario_list_schema.dump(data), 200
        return {"message": gettext("horarios_not_found")}, 404

    @classmethod
    @jwt_required
    def delete(cls, id: int):  # HORARIO ID
        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        horario = HorarioModal.find_by_id(id)

        if horario:
            try:
                listHorarios = HorarioModal.getAllAssociated(horario.cadeira_id, horario.horainicio, horario.horafim,
                                                             horario.sala_id)
                for r in listHorarios:
                    HorarioModal.find_by_id(r.horario_id).delete_from_db()
                return {"message": gettext("horarios_deleted")}, 200
            except:
                return {"message": gettext("horarios_dependency")}, 400
        return {"message": gettext("horarios_not_found")}, 404


class HorarioGeral(Resource):
    @classmethod
    @jwt_required
    def post(cls):
        claims = get_jwt_claims()
        if not claims["access"] or claims["access"] != 2:
            return {"message": "Admin previlege required"}, 401

        horario_json = request.get_json()
        x = horario_json['datainicio'].split("/")
        horario_json['data'] = x[2] + "/" + x[1] + "/" + x[0]
        dateInicio1 = datetime(int(x[2]), int(x[1]), int(x[0]))

        x = horario_json['datafim'].split(
            "/")
        dateFim1 = datetime(int(x[2]), int(x[1]), int(x[0]))

        del horario_json['datainicio']
        del horario_json['datafim']

        while dateInicio1 < dateFim1:
            if int(dateInicio1.strftime("%w")) == int(horario_json['diaSemana']):
                horarioObj = horario_schema.load(horario_json)
                horarioObj.data = dateInicio1.strftime("%Y/%m/%d")
                horarioObj.save_to_db()
            dateInicio1 = dateInicio1 + timedelta(days=1)

        return {"message": gettext("horarios_inserted")}, 200

    @classmethod
    @jwt_required
    def get(cls):
        horario_json = request.get_json()
        x = horario_json['datainicio'].split("/")
        dateInicio1 = horario_json['datainicio'] = x[2] + "/" + x[1] + "/" + x[0]

        x = horario_json['datafim'].split(
            "/")
        dateFim1 =  horario_json['datafim'] = x[2] + "/" + x[1] + "/" + x[0]

        if "cadeiras" in horario_json:
            cadeiras = horario_json['cadeiras']
        elif "userId" in horario_json:
            user = UserModel.find_by_id(horario_json['userId'])
            cadeiras = user_schema.dump(user)["cadeiras"]
        else:
            return {"message": gettext("horarios_not_found")}, 404

        horarios = HorarioModal.find_users_horario(cadeiras,dateInicio1, dateFim1)

        if horarios:
            data = horario_list_schema.dump(horarios)
            for d in data:
                x = d['data'].split("/")
                d['data'] = x[2] + "/" + x[1] + "/" + x[0]
            return horario_list_schema.dump(data), 200
        return {"message": gettext("horarios_not_found")}, 404