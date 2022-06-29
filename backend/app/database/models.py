from sqlalchemy import Column, Integer, String

from .db import Base


class LiftCard (Base):
    __tablename__ = "liftcard"
    # fields
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(320))
    description = Column(String(1000))

    # def __init__(self, id, title, description):
    #         self.id = id
    #         self.title = title
    #         self.description = description
    #         return LiftCard
