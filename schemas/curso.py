from ma import ma
from models.curso import CursoModel
from models.cadeira import CadeiraModel
from schemas.cadeira import CadeiraSchema


class CursoSchema(ma.SQLAlchemyAutoSchema):
    cadeiras = ma.Nested(CadeiraSchema, many=True)

    class Meta:
        model = CursoModel
        dump_only = ("curso_id",)
        include_fk = True
        load_instance = True