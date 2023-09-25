import { privateApi } from "../index";

export interface tacticTestProps {
  optionCode: string;
  tacticPythonCode: string | undefined;
  tacticJsonCode: string | undefined;
  startAsset: number;
  startTime: string;
  term: string;
  repeatCnt: number;
}

// 전략 테스트
export const tacticTest = async (data: tacticTestProps) => {
  console.log(
    "tacticTesttacticTesttacticTesttacticTesttacticTesttacticTesttacticTesttacticTesttacticTesttacticTest"
  );
  console.log(data);
  const res = await privateApi.post(`/tactic/test`, data);
  console.log("testresponse");
  console.log(res.data);
  return res.data;
};



// 전략 생성
export const tacticCreate = async (data:FormData) => {
  console.log(data)
  const res = await privateApi.post(`/tactic`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(res.data);
  return res.data;
};