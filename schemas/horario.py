from ma import ma
from models.horario import HorarioModal


class HorarioSchema(ma.SQLAlchemyAutoSchema):

    class Meta:
        model = HorarioModal
        dump_only = ("horario_id",)
        include_fk = True
        load_instance = True