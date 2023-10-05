import styled from "styled-components";

export const Container = styled.div`
width: 99%;
min-height: 1000px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
margin: 0px 0px 0px 5px;
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
export const UserInfo = styled.div`
display: flex;
min-width: 300px;
margin: 0px 15% 0px 0px;
@media(max-width:1000px){
  margin: 0px 3% 0px 0px;
}
`;
export const UserImg = styled.img`
height: 23px;
`;
export const NickName = styled.div`
color: #B8B6B6;
font-size: 13px;
margin: 0px 0px 0px 10px;
`;
export const Date = styled.div`
color: #B8B6B6;
font-size: 13px;
margin: 0px 0px 0px 10px;
`;
export const Box = styled.div`
font-size: 13px;
margin: 0px 0px 0px 40%;
display: flex;
@media(max-width: 1500px){
  margin: 0px 0px 0px 30%;
}
@media(max-width: 1300px){
  margin: 0px 0px 0px 20%;
}
@media(max-width: 1000px){
  margin: 0px 0px 0px 0%;
}
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
border: 1px solid #EAEAEA;
width: 100%;
margin: 15px 0px 0px 0px;
`;
export const Wrapper = styled.div`
width: 100%;
min-height: 100px;
/* border: 1px solid black; */
`;
export const ContentBox = styled.div`
display: flex;
width: 100%;
min-height: 100px;
@media(max-width: 1000px){
  display: block;
}
`;
export const ContentImg = styled.div`
width: 50%;
height: 500px;
display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  background-color: #EAEAEA;
  @media(max-width: 1000px){
    width: 100%;
}
`;
export const ImgBox = styled.div`
width: 90%;
height: 90%;
background: #FFFFFF;
border: 1px solid #CECECE;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 6px;
display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;
export const Img = styled.img`
width: 70%;
height: 90%;
object-fit: contain
`;

export const Content = styled.div`
width: 45%;
font-size: 16px;
padding: 20px;
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
min-height: 80px;
`;
export const DeleteBtn = styled.div`
width: 60px;
height: 24px;
background: #EC4275;
border-radius: 6px;
font-size: 11px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
color: #FFFFFF;
position: relative;
top: 40px;
left: 93%;
@media(max-width:1000px){
  left: 83%;
}
&:hover{
  background-color: #B61E35;
}
`;

export const DownloadBtn = styled.div`
border-radius: 3px;
padding: 3px;
height: 25px;
position: relative;
top:180px;
left: 10%;
&:hover{
  background-color: #EAEAEA;
  &::before {
      content: '테스트'; /* 호버 상태일 때 표시할 텍스트 */
      position: absolute;
      font-size: 12px;
      top: 40px; /* 텍스트를 버튼 위로 올립니다 */
      left: 50%; /* 가운데 정렬 */
      transform: translateX(-50%); 
      width: 55px;
      height: 15px;
      bottom: 62px;
      background: #484848;
      color: white;
      border-radius: 3px;
      text-align: center;
      padding: 3px;
    }
  }
`;






