import { ClockLoader } from "react-spinners";
import { Background, LoadingText } from "./Spinner.style";

function Spinner() {
  return (
    <Background>
      <ClockLoader color="#36d7b7" size={200} speedMultiplier={2} />
    </Background>
  );
}
export default Spinner;
