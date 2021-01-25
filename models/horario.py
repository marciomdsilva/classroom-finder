from typing import List

from flask import session
from sqlalchemy import func
from db import db
from sqlalchemy.sql import func, and_


class HorarioModal(db.Model):
    __tablename__ = "horarios"

    horario_id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10), nullable=False)
    horainicio = db.Column(db.String(5), nullable=False)
    horafim = db.Column(db.String(5), nullable=False)
    diaSemana = db.Column(db.Integer, nullable=False)

    cadeira_id = db.Column(db.Integer, db.ForeignKey("cadeiras.cadeira_id"), nullable=False)
    sala_id = db.Column(db.Integer, db.ForeignKey("salas.sala_id"), nullable=False)

    @classmethod
    def find_by_id(cls, horario_id: int) -> "HorarioModal":
        return cls.query.filter_by(horario_id=horario_id).first()

    @classmethod
    def find_by_cadeira(cls, cadeira_id: int) -> "HorarioModal":

        subMax = db.session.query(
            HorarioModal.horario_id,
            func.max(HorarioModal.data).label("mdate")
        ).filter_by(cadeira_id=cadeira_id).group_by(HorarioModal.diaSemana, HorarioModal.horainicio,
                                                                 HorarioModal.horafim, HorarioModal.sala_id).subquery(
            't2')

        subMin = db.session.query(
            HorarioModal.horario_id,
            func.min(HorarioModal.data).label("mdate")
        ).filter_by(cadeira_id=cadeira_id).group_by(HorarioModal.diaSemana, HorarioModal.horainicio,
                                                                 HorarioModal.horafim, HorarioModal.sala_id).subquery(
            't3')

        query1 = db.session.query(HorarioModal).join(
            subMax,
            and_(
                HorarioModal.horario_id == subMax.c.horario_id,
                HorarioModal.data == subMax.c.mdate
            )
        )
        query2 = db.session.query(HorarioModal).join(
            subMin,
            and_(
                HorarioModal.horario_id == subMin.c.horario_id,
                HorarioModal.data == subMin.c.mdate
            )
        )
        return query1.union(query2).order_by(HorarioModal.horainicio.asc(), HorarioModal.horafim.asc(),
                                             HorarioModal.diaSemana.asc(), HorarioModal.sala_id.asc())

    @classmethod
    def find_users_horario(self, cadeiras, datainicio, datafim):
        return HorarioModal.query\
            .filter(HorarioModal.data >= datainicio,HorarioModal.data <= datafim, HorarioModal.cadeira_id.in_(cadeiras))\
            .order_by(HorarioModal.data, HorarioModal.horainicio)

    @classmethod
    def getAllAssociated(self, cadeira_id, horainicio, horafim, sala_id, diaSemana  ) -> "HorarioModal":
        return self.query.filter_by(diaSemana = diaSemana, cadeira_id=cadeira_id, horainicio=horainicio, horafim=horafim, sala_id=sala_id).all()

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
