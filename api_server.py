from fastapi      import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from urllib.parse import urlparse, ParseResult
from pydantic     import BaseModel
from wrapper      import ChatGPT
from uvicorn      import run


app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "running", "message": "EsaGo Chat Server is Active!"}

class ConversationRequest(BaseModel):
    proxy: str = None
    message: str
    image: str = None

def format_proxy(proxy: str) -> str:
    # Remove protocol if present to simpler analysis
    cleaned = proxy.replace("http://", "").replace("https://", "")
    
    # Check for ip:port:user:pass format (3 colons)
    # But be careful of user:pass@ip:port (2 colons + @)
    if "@" not in cleaned and cleaned.count(":") == 3:
        parts = cleaned.split(":")
        # ip:port:user:pass -> http://user:pass@ip:port
        return f"http://{parts[2]}:{parts[3]}@{parts[0]}:{parts[1]}"
    
    # If not that specific format, ensure protocol and validate
    if not proxy.startswith(("http://", "https://")):
        proxy = "http://" + proxy
        
    try:
        parsed: ParseResult = urlparse(proxy)

        if parsed.scheme not in ("http", "https", ""):
            raise ValueError("Invalid scheme")


        if not parsed.hostname or not parsed.port:
             # Try fallback if urlparse failed to get port from some weird string
             raise ValueError("Missing hostname or port")

        if parsed.username and parsed.password:
            return f"http://{parsed.username}:{parsed.password}@{parsed.hostname}:{parsed.port}"
        else:
            return f"http://{parsed.hostname}:{parsed.port}"
    
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid proxy format: {str(e)}")
    except Exception as e:
         # Fallback for weird parsing errors (like the one user saw)
        raise HTTPException(status_code=400, detail=f"Proxy parsing failed: {str(e)}")

@app.post("/conversation_stream")
async def create_conversation_stream(request: ConversationRequest):
    if request.proxy:
        proxy = format_proxy(request.proxy)
    else:
        proxy = None
    
    try:
        # Create a generator for the stream
        def iter_response():
            chat = ChatGPT(proxy)
            if request.image:
                generator = chat.ask_stream(request.message, request.image)
            else:
                generator = chat.ask_stream(request.message)
            
            for chunk in generator:
                # print(f"[VERBOSE] Yielding chunk: {chunk[:20] if chunk else 'Empty'}...")
                yield chunk
            print(f"[VERBOSE] Stream finished.")
        
        return StreamingResponse(iter_response(), media_type="text/plain")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

@app.post("/conversation")
async def create_conversation(request: ConversationRequest):
    # Proxy is now optional for testing
    if request.proxy:
        proxy = format_proxy(request.proxy)
    else:
        proxy = None
    
    try:
        if request.image:
            answer: str = ChatGPT(proxy).ask_question(request.message, request.image)
        else:
            answer: str = ChatGPT(proxy).ask_question(request.message)
        
        print(f"DEBUG: AI ANSWER={answer}") # Debug Output

        
        return {
            "status": "success",
            "result": answer
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

if __name__ == "__main__":
    run(app, host="0.0.0.0", port=6969)