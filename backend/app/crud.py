from sqlalchemy.orm import Session
from app.database.models import LiftCard

'''
Defining the database CRUD (Create, Read, Update and Destroy) operations (Will focus on Create and READ ** For now... )

'''

# Add a new lift card 

def create_lift(db:Session, title, description):
    """ User created lift card 

    Args:
        db (Session): _description_
        title (_type_): _description_
        description (_type_): _description_
    """
    
    # Create LiftCard instance
    new_lift = LiftCard( title=title, description=description)
    
    # tie instance obj to the database session
    db.add(new_lift)
    
    # commit instance
    db.commit()
    
    # refresh attributes 
    db.refresh(new_lift)
    
    return new_lift

# GET all lift cards 

def get_all_lift_cards(db:Session):
    """ Get all lift cards from the database

    Args:
        db (Session): _description_ / __title__

    Returns:
        _type_: _description_ and __title__
    """
    all_lifts = db.query(LiftCard).all()
    return all_lifts

