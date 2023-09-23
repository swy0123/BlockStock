import styled from "styled-components";

export const Container = styled.div`
  width: 613.02px;
  height: 571px;
  background: #FFFFFF;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  z-index: 3;
`;

export const Header = styled.div`
    display: flex;
    margin:20px 0px 10px 20px;
`;

export const CreateTitle = styled.div`
font-weight: 500;
width: 70px;
font-size: 14px;
display: flex;
align-items: center;
color: #595959;
`;

export const CreateImage = styled.img`
width: 30px;
margin: 0px 0px 0px 360px;
`;

export const CreateNickName = styled.div`
margin: 2px 0px 0px 5px;
display: flex;
align-items: center;
color: #595959;
`;

export const ContestNameBox = styled.div`
display: flex;
margin: 20px 0px 0px 40px;
`;

export const ContestName = styled.div`
font-weight: 400;
font-size: 16px;
color: #4D5055;
margin: 10px 20px 0px 0px;
`;

export const ContestNameInput = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
width: 400px;
height: 40px;
margin-top: 3px;
font-size: 14px;
`;

export const ContestStock = styled.div`
display: flex;
margin: 20px 0px 0px 40px;
`;

export const StockName = styled.div`
font-family: 'Aksara Bali Galang';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #4D5055;
margin: 10px 20px 0px 0px;
`;

export const ContestStockInput = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
width: 400px;
height: 40px;
margin-top: 3px;
font-size: 14px;
`;

export const ContestPeriod = styled.div`
margin: 15px 0px 0px 0px;
`;

export const PeriodName = styled.div`
width: 90px;
font-weight: 400;
font-size: 16px;
color: #4D5055;
margin: 20px 5px 0px 40px;
`;

export const ContestEtc = styled.div`
display: flex;
margin: 20px 0px 0px 110px;
`;
export const ContestTicket = styled.input`
width: 120px;
height: 43px;
border: 2px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
font-size: 20px;
font-weight: 600;
margin: 8px 30px 0px 0px;
text-align: center;
`;

export const ContestContentBox = styled.div`
display: flex;
margin: 20px 0px 0px 40px;
`;

export const ContentName = styled.div`
font-size: 16px;
line-height: 49px;
color: #4D5055;
margin: 0px 20px 0px 0px;
`;


export const ContestContent = styled.textarea`
box-sizing: border-box;
width: 402.62px;
height: 102.7px;
background: #FFFFFF;
border: 1px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
resize: none;
`;

export const BtnBox = styled.div`
display: flex;
margin: 10px 0px 0px 380px;
`;

export const CreateBtn = styled.button`
width: 70px;
height: 30px;
background: #9155FD;
border-radius: 6px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
align-items: center;
text-align: center;
color: #FFFFFF;
border: none;
margin: 0px 30px 0px 0px;
cursor: pointer;
&:hover {
  background-color: white; 
  border: 1px solid #9155FD;
  color: #9155FD;
  transition: background-color 0.5s, border 0.5s, color 0.5s;
}
`;

export const CancelBtn = styled.button`
width: 70px;
height: 30px;
background: white;
border-radius: 6px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
align-items: center;
text-align: center;
color: #9155FD;
border: 1px solid #9155FD;
cursor: pointer;
&:hover {
  background-color: #9155FD; 
  border: none;
  color: white;
  transition: background-color 0.5s, border 0.5s, color 0.5s;
}
`;



