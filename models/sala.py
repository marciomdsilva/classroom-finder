from typing import List
from db import db


class SalaModel(db.Model):
    __tablename__ = "salas"

    sala_id = db.Column(db.Integer, primary_key=True)
    identificacao = db.Column(db.String(80), nullable=False, unique=True)
    andar = db.Column(db.Integer, nullable=False)
    lotacao = db.Column(db.Integer, nullable=False)
    mapa0 = db.Column(db.String(255), nullable=False)
    mapa1 = db.Column(db.String(255), nullable=False)
    mapa2 = db.Column(db.String(255), nullable=False)


    # horario = db.relationship("HorarioModel")
    def __init__(self, identificacao, andar, lotacao):
        self.identificacao = identificacao
        self.andar = andar
        self.lotacao = lotacao
    @classmethod
    def find_by_name(cls, identificacao: str) -> "SalaModel":
        return cls.query.filter_by(identificacao=identificacao).first()  # SELECT * FROM items Where name=name LIMIT 1

    @classmethod
    def find_by_id(cls, sala_id: int) -> "SalaModel":
        return cls.query.filter_by(sala_id=sala_id).first()  # SELECT * FROM items Where name=name LIMIT 1

    @classmethod
    def find_all(cls, search: str = None) -> List["SalaModel"]:
        if search is None:
            return cls.query.all()
        else:
            return cls.query.filter(SalaModel.identificacao.contains(search))

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()