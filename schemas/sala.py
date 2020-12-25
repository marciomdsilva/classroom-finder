from ma import ma
from models.sala import SalaModel

class SalaSchema(ma.SQLAlchemyAutoSchema):

    class Meta:
        model = SalaModel
        dump_only = ("sala_id",)
        include_fk = True
        load_instance = True