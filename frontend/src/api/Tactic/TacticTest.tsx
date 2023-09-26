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
  console.log("전략 테스트");
  console.log(data);
  try {
    const res = await privateApi.post(`/tactic/test`, data);
    console.log("testresponse");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export interface saveTacticProps {
  title: string;
  optionCode: string;
  tacticJsonCode: string;
  tacticPythonCode: string;
  imgPath: string;
  testReturns: number;
}

// 전략 생성
export const tacticCreate = async (data: saveTacticProps) => {
  console.log(data)
  try {
    const res = await privateApi.post(`/tactic`, data);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// export const tacticCreate = async (data:FormData) => {
//   console.log(data)
//   const res = await privateApi.post(`/tactic`, data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   console.log(res.data);
//   return res.data;
// };

// 전략 조회
export const tacticImport = async (params: number) => {
  console.log(params)
  try {
    const res = await privateApi.get(`/tactic`, {params});
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export interface updateTacticProps {
  id: number;
  title: string;
  optionCode: string;
  tacticJsonCode: string;
  tacticPythonCode: string;
  imgPath: string;
  testReturns: number;
}

// 전략 수정
export const tacticUpdate = async (data: updateTacticProps) => {
  console.log(data)
  try {
    const res = await privateApi.put(`/tactic`, data);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 전략 삭제
export const tacticDelete = async (params: number) => {
  console.log(params)
  try {
    const res = await privateApi.delete(`/tactic`, {params});
    return res;
  } catch (err) {
    console.log(err);
  }
};
