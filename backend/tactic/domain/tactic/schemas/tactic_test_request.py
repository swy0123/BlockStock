from pydantic import BaseModel

class TacticTestRequest(BaseModel):
    tacticPythonCode: str