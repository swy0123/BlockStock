import styled from "styled-components";

export const Container = styled.div`
  width: 88%;
  padding: 0px 5%;
  min-height: 1000px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 20px 0px 100px 0px;
`;

export const PostTitle = styled.div`
  font-weight: 500;
  font-size: 25px;
  align-items: flex-end;
  padding: 50px 0px 0px 10px;
  color: #000000;
`;

export const Header = styled.div`
  display: flex;
  margin: 20px 0px 0px 6px;
  width: 100%;
`;
export const UserImg = styled.img`
  height: 23px;
`;
export const NickName = styled.div`
  color: #b8b6b6;
  font-size: 15px;
  margin: 0px 0px 0px 10px;
`;
export const Date = styled.div`
  color: #b8b6b6;
  font-size: 15px;
  margin: 0px 0px 0px 10px;
`;
export const Box = styled.div`
  font-size: 13px;
  width: 100%;
  /* margin: 0px 0px 0px 35%; */
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  /* position: relative;
  right: -130px; */
`;
export const Hit = styled.div`
  color: #b8b6b6;
  margin: 0px 0px 0px 10px;
  display: flex;
`;
export const Like = styled.div`
  display: flex;
  color: #b8b6b6;
  margin: 0px 0px 0px 10px;
`;
export const Comment = styled.div`
  color: #b8b6b6;
  margin: 0px 0px 0px 10px;
  display: flex;
`;
export const Line = styled.div`
  border: 1px solid #d6d4d4;
  width: 100%;
  margin: 20px 0px 0px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  /* border: 1px solid black; */
`;

export const Content = styled.div`
  font-size: 16px;
`;
export const LikeBtnBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 100%;
  min-height: 80px;
`;
export const LikeBtn = styled.div`
  width: 100px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #a7a7a7;
  border-radius: 200px;

  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  color: #6d6d6d;
`;

export const BtnBox = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
`;
export const DeleteBtn = styled.div`
  width: 80.05px;
  height: 30px;
  background: #ec4275;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  color: #ffffff;
  margin: 30px 0px 0px 30px;
  &:hover {
    background-color: #b61e35;
  }
`;
export const UpdateBtn = styled.div`
  width: 80.05px;
  height: 30px;
  background: #097df3;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  color: #ffffff;
  margin: 30px 0px 0px 750px;
  &:hover {
    background-color: #0050a0;
  }
`;
export const ContentBox = styled.div`
  width: 88%;
  min-height: 50px;
  padding: 60px;
  margin-top: -50px;
  /* border: 1px solid black; */
`;
export const ImgBox = styled.div`
  text-align: center;
  /* border: 1px solid black; */
  width: 40%;
  min-height: 10%;
  margin: 20px auto;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const DownloadBox = styled.div`
  /* width: 30%; */
  height: 50px;
  position: relative;
  left: 3% ;
  top: 50px;
  margin-right: 60px;
  cursor: pointer;
  /* border: 5px solid black; */
  /* display: flex; */
`;
export const DownBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: end;
`;
export const Down = styled.div`
  /* width: 100px; */
  background-color: #f1f1f2;
  padding: 5px 10px;
  border-radius: 6px;
  color: gray;
  margin-bottom: 5px;
`;
export const DownImg = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;
