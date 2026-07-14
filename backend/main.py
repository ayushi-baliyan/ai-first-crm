from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from tools import (
    log_interaction,
    summarize_interaction,
    suggest_followup,
    fetch_hcp_profile,
    edit_interaction,
)

app = FastAPI(title="AI First CRM")

# ==========================
# CORS FIX
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# MODELS
# ==========================
class Interaction(BaseModel):
    notes: str


class DoctorRequest(BaseModel):
    name: str


class EditRequest(BaseModel):
    old_text: str
    new_text: str


# ==========================
# ROUTES
# ==========================
@app.get("/")
def home():
    return {
        "message": "AI First CRM Running"
    }


@app.post("/log")
def log(data: Interaction):
    return {
        "summary": log_interaction(data.notes)
    }


@app.post("/summary")
def summary(data: Interaction):
    return {
        "summary": summarize_interaction(data.notes)
    }


@app.post("/followup")
def followup(data: Interaction):
    return {
        "followup": suggest_followup(data.notes)
    }


@app.post("/doctor")
def doctor(data: DoctorRequest):
    return fetch_hcp_profile(data.name)


@app.post("/edit")
def edit(data: EditRequest):
    return {
        "updated": edit_interaction(
            data.old_text,
            data.new_text,
        )
    }