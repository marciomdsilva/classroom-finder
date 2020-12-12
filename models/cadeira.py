from typing import List
from db import db


class CadeiraModel(db.Model):
    __tablename__ = "cadeiras"

    cadeira_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

    curso_id = db.Column(db.Integer,    db.ForeignKey("cursos.curso_id"), nullable=False)
    curso = db.relationship("CursoModel")

    @classmethod
    def find_by_name(cls, name: str) -> "CadeiraModel":
        return cls.query.filter_by(name=name).first()  # SELECT * FROM items Where name=name LIMIT 1

    @classmethod
    def find_by_id(cls, cadeira_id: int) -> "CadeiraModel":
        return cls.query.filter_by(cadeira_id=cadeira_id).first()  # SELECT * FROM items Where name=name LIMIT 1

    @classmethod
    def find_by_values(cls, name: str, curso_id: int) -> "CadeiraModel":
        return cls.query.filter_by(curso_id=curso_id, name=name).first()  # SELECT * FROM items Where name=name LIMIT 1

    @classmethod
    def find_all(cls, search: str = None, curso: int = None) -> List["CadeiraModel"]:

        if search is None and curso is None:
            return cls.query.all()
        else:
            return cls.query.filter(CadeiraModel.name.contains(search), CadeiraModel.curso_id.contains(curso))

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
