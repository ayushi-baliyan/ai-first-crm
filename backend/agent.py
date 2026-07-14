from dotenv import load_dotenv
import os

from langchain_groq import ChatGroq
from langgraph.graph import StateGraph, END

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model=os.getenv("MODEL_NAME")
)

def ai_node(state):
    response = llm.invoke(state["input"])
    state["output"] = response.content
    return state

graph = StateGraph(dict)

graph.add_node("AI", ai_node)

graph.set_entry_point("AI")

graph.add_edge("AI", END)

crm_agent = graph.compile()

def ask_ai(prompt):
    result = crm_agent.invoke({"input": prompt})
    return result["output"]