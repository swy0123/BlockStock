import { ClockLoader } from "react-spinners";
import { BackImg, Background, P, Text, Box } from "./Spinner.style";
import { useNavigate } from "react-router-dom";

function Spinner() {
  const navigate = useNavigate();
  return (
    <Background>
      <Box onClick={()=> navigate(-1)}>
      <BackImg src="/icon/back1.png"/>
      <Text>뒤로가기</Text>
      </Box>
      <ClockLoader color="#a67fdd" size={150} speedMultiplier={2} />
      <P>Loading...</P>
    </Background>
  );
}
export default Spinner;
