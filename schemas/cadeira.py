from ma import ma
from models.cadeira import CadeiraModel
from models.curso import CursoModel


class CadeiraSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = CadeiraModel
        load_only = ("curso",)
        dump_only = ("id",)
        include_fk = True
        load_instance = True