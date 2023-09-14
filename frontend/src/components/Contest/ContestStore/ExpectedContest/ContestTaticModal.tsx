import React, {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilValue } from "recoil";
import { contestTatic } from '../../../../recoil/Contest/ExpectedContest'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Swiper.css'
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarIcon from '@mui/icons-material/Star';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { 
  Modal, 
  Container,
  Header,
  CloseBtn,
  Title,
  Wrapper,
  Card,
  Explanation1,
  Explanation2,
  TaticTitle,
  TaticImg,
  TaticTime,
  Button
} from './ContestTaticModal.style'
function ContestTaticModal({selectedContest, onClose}){
  const contestTaticList = useRecoilValue(contestTatic);
  const [isStarred, setIsStarred] = useState(Array(contestTaticList.length).fill(false));
  const [selectedTacticIndex, setSelectedTacticIndex] = useState(-1);

  const handleCardClick = (index) => {
    const newIsStarred = [...isStarred];
    newIsStarred[index] = !newIsStarred[index];
    setIsStarred(newIsStarred);
    if (selectedTacticIndex === index) {
      setSelectedTacticIndex(-1);
    } else {
      setSelectedTacticIndex(index);
    }
  };
  
  return(
    <Container>
      <Modal>
        <Header>
          <Title>대회 참가 (1/2)</Title>
          <CloseBtn onClick={onClose}><CloseIcon/></CloseBtn>
        </Header>
        <Wrapper>
          <Swiper
            slidesPerView={3}
            spaceBetween={-90}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
          {contestTaticList.map((contest,index)=>(
            <SwiperSlide className="slide" key={contest.tacticId}>
              <div>
                <Card onClick={() => handleCardClick(index)}
                  style={{
                    border: selectedTacticIndex === index  ? "3.5px solid #a782ec" : "", 
                    boxShadow: selectedTacticIndex === index  ? "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" : "", 
                  }}
                >
                      {selectedTacticIndex  === index ? (
                        // <StarIcon style={{color:'#FFD700', margin:'10px'}}/>
                        <TaskAltIcon style={{color:'green', margin:'10px'}}/>
                        ) : (
                          // <StarBorderIcon style={{margin:'10px'}}/>
                          <RadioButtonUncheckedIcon style={{margin:'10px'}}/>
                      )}
                      <TaticTitle>
                        {contest.title}
                      </TaticTitle>
                      <TaticTime>
                        {contest.updatedAt}
                      </TaticTime>
                      <hr style={{width:'170px'}}/>
                      {/* <TaticImg  src={contest.imgPath}/> */}
                      <TaticImg  src='/icon/전략블록.png'/>
                </Card>
            </div>
            </SwiperSlide>

              
          ))}
          </Swiper>
        </Wrapper>
        <Explanation1>대회에 참가할 전략을 선택해주세요.</Explanation1>
        <Explanation2>전략 선택은 대회 당 1개로 제한합니다.</Explanation2>
        <Button>
          선택하기
        </Button>
      </Modal>
    </Container>
  )
}

export default ContestTaticModal