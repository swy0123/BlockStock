import React, {useState, useEffect} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilValue, useRecoilState  } from "recoil";
// import { contestTatic } from '../../../../recoil/Contest/ExpectedContest'
import { tacticdata } from '../../../../recoil/TacticBoard/TacticBoardBox'
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
  Button,
  TitleBox
} from './ContestTaticModal.style'
import ContestTicketModal from "./ContestTicketModal";

// // contestid 리코일
import { ContestId } from '../../../../recoil/Contest/ExpectedContest'

function ContestTaticModal(props){
  // 전달 받은 데이터
  const { selectedContest, type, onClose } = props;
  
  // 리코일 대회 id 전략 id
  const [contestId, setContestId] = useRecoilState(ContestId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const contestTaticList = useRecoilValue(contestTatic);
  
  const [isStarred, setIsStarred] = useState(Array(selectedContest.length).fill(false));
  const [selectedTacticIndex, setSelectedTacticIndex] = useState(-1);
  const [tacticId, setTacticId] = useState(0)

  // 전략 게시글
  const [state, setState] = useRecoilState(tacticdata);
  const [tactic, setTactic] = useState({
    tacticId: 0,
    imgPath: null
  })


  useEffect(() => {
    console.log('tactic',tactic);
  }, []);


  const handleCardClick = (e) => {
    console.log('tactic',tactic);
    console.log('e.t',e);

    const newContestId = { ...contestId, tacticId: e.t };
      // Recoil 상태 업데이트
    setContestId(newContestId);
    console.log(newContestId)

    setTactic({
      ...tactic,
      tacticId: e.i,
      imgPath: e.img
    });
    setTacticId(e.t)
    const newIsStarred = [...isStarred];
    newIsStarred[e.i] = !newIsStarred[e.i];
    setIsStarred(newIsStarred);
    if (selectedTacticIndex === e.i) {
      setSelectedTacticIndex(-1);
    } else {
      setSelectedTacticIndex(e.i);
    }
  };


  const OpenModal = () => {
    if (type==='tactic'){
      console.log(tactic);
      setState(tactic);
      onClose()
    } else {
      console.log(selectedContest);
      setIsModalOpen(!isModalOpen);
    }
  };


  const CloseModal = () => {
    setIsModalOpen(false);
  };


  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    return formattedDate;
  };

  return(
      <>
      <Container>
        <Modal>
          <Header>
            <TitleBox>
              {type === 'contest' ? (
                <Title>{selectedContest.title} 대회 참가 (1/2)</Title>
                ) : (
                  <Title>전략 불러오기</Title>
                )}
            </TitleBox>
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
            {selectedContest.map((contest, index) => (
              <SwiperSlide className="slide" key={contest.tacticId}>
                <div>
                  <Card
                    onClick={() =>
                      handleCardClick({ i: index, t: contest.id, img: contest.imgPath })
                    }
                    style={{
                      border:
                        selectedTacticIndex === index ? "3.5px solid #a782ec" : "",
                      boxShadow:
                        selectedTacticIndex === index
                          ? "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                          : "",
                    }}
                  >
                    {selectedTacticIndex === index ? (
                      <TaskAltIcon style={{ color: "green", margin: "10px" }} />
                    ) : (
                      <RadioButtonUncheckedIcon style={{ margin: "10px" }} />
                    )}
                    <TaticTitle>{contest.title}</TaticTitle>
                    <TaticTime>{formatDateTime(contest.createdAt)}</TaticTime>
                    <hr style={{ width: "170px" }} />
                    <TaticImg src="/icon/전략블록.png" />
                  </Card>
                </div>
              </SwiperSlide>
            ))}

            </Swiper>
          </Wrapper>

          {type === 'contest' ? (
            <div>
              <Explanation1 >대회에 참가할 전략을 선택해주세요.</Explanation1>
              <Explanation2 >전략 선택은 대회 당 1개로 제한합니다.</Explanation2>
            </div>
          ) : (
            <div>
              <Explanation1 >전략을 선택해주세요.</Explanation1>
              <Explanation2 >전략 선택은 1개로 제한합니다.</Explanation2>
            </div>
          )}

          <Button onClick={OpenModal}>
            선택하기
          </Button>
          
        </Modal>
      </Container>
      {isModalOpen ? 
      <ContestTicketModal 
      tacticid = {tacticId} 
      selectedContest={selectedContest} 
      onClose={CloseModal}
      /> : null}
    </>
  )
}

export default ContestTaticModal