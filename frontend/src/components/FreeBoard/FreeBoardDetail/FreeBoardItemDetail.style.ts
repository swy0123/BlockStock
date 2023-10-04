import styled from "styled-components";

export const Container = styled.div`
width: 1000px;
min-height: 1000px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
margin: 20px 0px 100px 100px;
`;

export const PostTitle = styled.div`
font-weight: 500;
font-size: 25px;
align-items: flex-end;
padding: 40px 0px 0px 60px;
color: #000000;
`;

export const Header = styled.div`
display: flex;
margin: 20px 0px 0px 60px;
`;
export const UserImg = styled.img`
height: 23px;
`;
export const NickName = styled.div`
color: #B8B6B6;
font-size: 15px;
margin: 0px 0px 0px 10px;
`;
export const Date = styled.div`
color: #B8B6B6;
font-size: 15px;
margin: 0px 0px 0px 10px;
`;
export const Box = styled.div`
font-size: 13px;
margin: 0px 0px 0px 230px;
display: flex;
`;
export const Hit = styled.div`
color: #B8B6B6;
margin: 0px 0px 0px 10px;
display: flex;
`;
export const Like = styled.div`
display: flex;
color: #B8B6B6;
margin: 0px 0px 0px 10px;
`;
export const Comment = styled.div`
color: #B8B6B6;
margin: 0px 0px 0px 10px;
display: flex;
`;
export const Line = styled.div`
border: 1px solid #D6D4D4;
width: 100%;
margin: 15px 0px 0px 0px;
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
background: #FFFFFF;
border: 1px solid #A7A7A7;
border-radius: 200px;

font-weight: 600;
font-size: 12px;
line-height: 19px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
color: #6D6D6D;
`;

export const BtnBox = styled.div`
width: 100%;
min-height: 100px;
display: flex;
`;
export const DeleteBtn = styled.div`
width: 80.05px;
height: 30px;
background: #EC4275;
border-radius: 6px;
font-weight: 600;
font-size: 14px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
color: #FFFFFF;
margin: 30px 0px 0px 30px;
&:hover{
  background-color: #B61E35;
}
`;
export const UpdateBtn = styled.div`
width: 80.05px;
height: 30px;
background: #097DF3;
border-radius: 6px;
font-weight: 600;
font-size: 14px;
display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
color: #FFFFFF;
margin: 30px 0px 0px 750px;
&:hover{
  background-color: #0050A0;
}
`;
export const ContentBox = styled.div`
width: 88%;
min-height: 100px;
padding: 60px;
border: 1px solid black;
`;
export const ImgBox = styled.div`
border: 1px solid black;
width: 100%;
min-height: 10%;
`;

export const Img = styled.img`
/* width: 100px; */
object-fit: contain;
`;
export const DownloadBox = styled.div`
width: 100%;
height: 50px;
border: 1px solid black;
`;

