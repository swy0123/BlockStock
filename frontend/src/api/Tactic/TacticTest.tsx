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

// 자유게시판 게시글 생성
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
