import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 713.02px;
    height: 671px;
    left: 679px;
    top: 182px;

    background: #FFFFFF;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    z-index: 3;
`;

export const Header = styled.div`
    display: flex;
    margin: 30px 0px 10px 40px;
`;

export const CreateTitle = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: 0.01em;

color: #595959;
`;

export const CreateImage = styled.img`
width: 35px;
margin: 0px 0px 0px 430px;
`;

export const CreateNickName = styled.div`
margin: 2px 0px 0px 5px;
display: flex;
align-items: center;
color: #595959;
`;

export const ContestNameBox = styled.div`
display: flex;
margin: 20px 0px 0px 80px;
`;

export const ContestName = styled.div`
font-family: 'Aksara Bali Galang';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 49px;

color: #4D5055;
margin: 0px 40px 0px 0px;
`;

export const ContestNameInput = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
width: 450.62px;
height: 46.07px;
margin-top: 3px;
font-size: 18px;
`;

export const ContestStock = styled.div`
display: flex;
margin: 20px 0px 0px 80px;
`;

export const StockName = styled.div`
font-family: 'Aksara Bali Galang';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 49px;

color: #4D5055;
margin: 0px 40px 0px 0px;
`;

export const ContestStockInput = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
width: 450.62px;
height: 46.07px;
margin-top: 3px;
font-size: 18px;
`;

export const ContestPeriod = styled.div`
margin: 15px 0px 0px 0px;
`;

export const PeriodName = styled.div`
width: 90px;
font-family: 'Aksara Bali Galang';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 49px;

color: #4D5055;
margin: 10px 5px 0px 78px;
`;

export const ContestEtc = styled.div`
display: flex;
margin: 20px 0px 0px 172px;
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
margin: 20px 0px 0px 75px;
`;

export const ContentName = styled.div`
font-size: 18px;
line-height: 49px;
color: #4D5055;
margin: 0px 20px 0px 0px;
`;


export const ContestContent = styled.textarea`
box-sizing: border-box;
width: 452.62px;
height: 162.7px;
background: #FFFFFF;
border: 1px solid rgba(160, 155, 163, 0.59);
border-radius: 6px;
resize: none;
`;

export const BtnBox = styled.div`
display: flex;
margin: 20px 0px 0px 430px;
`;

export const CreateBtn = styled.button`
width: 90.86px;
height: 33.32px;
background: #9155FD;
border-radius: 6px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
align-items: center;
text-align: center;
color: #FFFFFF;
border: none;
margin: 0px 30px 0px 0px;
&:hover {
  background-color: white; 
  border: 1px solid #9155FD;
  color: #9155FD;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
}
`;

export const CancelBtn = styled.button`
width: 90.86px;
height: 33.32px;
background: white;
border-radius: 6px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
align-items: center;
text-align: center;
color: #9155FD;
border: 1px solid #9155FD;
&:hover {
  background-color: #9155FD; 
  border: none;
  color: white;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
}
`;



