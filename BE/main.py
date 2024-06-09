from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1"
    "http://44.220.132.251"
]

visitors = []

@app.get("/")
async def Visit():
    return {"visitors": visitors}

@app.post("/")
async def PostVisit(visitor: dict):
    visitors.append(visitor)
    return {"visitor_num": len(visitors)}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)