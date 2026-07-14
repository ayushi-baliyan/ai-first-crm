from agent import ask_ai

# Tool 1
def log_interaction(notes):
    prompt = f"""
    Summarize this doctor interaction.

    Notes:
    {notes}
    """
    return ask_ai(prompt)

# Tool 2
def edit_interaction(old_text, new_text):
    prompt = f"""
    Update the interaction.

    Old:
    {old_text}

    New:
    {new_text}
    """
    return ask_ai(prompt)

# Tool 3
def summarize_interaction(notes):
    prompt = f"Summarize:\n{notes}"
    return ask_ai(prompt)

# Tool 4
def fetch_hcp_profile(name):
    return {
        "Doctor": name,
        "Speciality": "Cardiologist",
        "Hospital": "Apollo Hospital"
    }

# Tool 5
def suggest_followup(notes):
    prompt = f"""
    Suggest follow-up action for this meeting.

    {notes}
    """
    return ask_ai(prompt)