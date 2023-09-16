from enum import Enum
class ContestType(str, Enum):
    PROCEED = "proceed"
    EXPECTED = "expected"
    FINISH = "finish"