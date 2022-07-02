from fastapi import FastAPI, Depends, status
from fastapi.middleware.cors import CORSMiddleware
# DB import
from app.database import models
from app.database.db import engine
from app.database.db import SessionLocal
from app import crud


# create a instance of FastAPI
app = FastAPI()

#create the database tables on app startup or reload
models.Base.metadata.create_all(bind=engine)

# Bring in the database

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# create a liftCard enpoint
@app.post("/create_lift", status_code=status.HTTP_201_CREATED)
def create_lift(title:str, description:str, db:SessionLocal = Depends(get_db)):
    lift = crud.create_lift(db=db, title=title, description=description)
    # now we'll return the object
    return {"liftcard","liftcard"}

@app.get("/all_lifts")
def  get_all_lift_cards(db:SessionLocal = Depends(get_db)):
    """
    Fetch a list of all Lift object
    Returns a list of objects
    """
    all_lift_cards = crud.get_all_lift_cards(db=db)
    return all_lift_cards

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome"}