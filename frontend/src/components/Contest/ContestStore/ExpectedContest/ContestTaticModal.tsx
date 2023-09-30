import React, {useState, useEffect} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilState  } from "recoil";
import { tacticdata } from '../../../../recoil/TacticBoard/TacticBoardBox'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./Swiper.module.css";
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
  TitleBox,
  Box
} from './ContestTaticModal.style'
import ContestTicketModal from "./ContestTicketModal";
 // 날짜 변환
 import dayjs from "dayjs";
// // contestid 리코일
import { ContestId } from '../../../../recoil/Contest/ExpectedContest'
// 전략 더미데이터
import {TacticList} from '../../../../recoil/Contest/Tactic'
function ContestTaticModal(props){
  // 전달 받은 데이터
  const { selectedContest, type, onClose } = props;
  
  // 리코일 대회 id 전략 id
  const [contestId, setContestId] = useRecoilState(ContestId);
  const [tacticList, setTacticList] = useRecoilState(TacticList);

  const [isModalOpen, setIsModalOpen] = useState(false);


  
  const [isStarred, setIsStarred] = useState(Array(tacticList.length).fill(false));
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
      console.log(tacticList);
      setIsModalOpen(!isModalOpen);
    }
  };


  const CloseModal = () => {
    setIsModalOpen(false);
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
            <CloseBtn onClick={onClose}>
              <CloseIcon style={{fontSize:'20px'}}/>
            </CloseBtn>
          </Header>

          <Wrapper>
            <Box>
              <Swiper
                slidesPerView={3}
                spaceBetween={-85}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.mySwiper}
              >
              {tacticList.map((contest, index) => (
                <SwiperSlide className={styles.slide} key={contest.tacticId}>
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
                      <div style={{display:'flex'}}>
                        {selectedTacticIndex === index ? (
                          <TaskAltIcon style={{ color: "green", margin: "10px", width:'20px' }} />
                        ) : (
                          <RadioButtonUncheckedIcon style={{ margin: "10px", width:'20px' }} />
                        )}
                        <TaticTitle>{contest.title}</TaticTitle>
                      </div>
                      <TaticTime>
                        {dayjs(contest.createdAt).format('YYYY.MM.DD HH:mm:ss')} 
                      </TaticTime>
                      <hr style={{ width: "170px" }} />
                      <TaticImg src="/icon/전략블록.png" />
                    </Card>
                  </div>
                </SwiperSlide>
              ))}

              </Swiper>
            </Box>
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
      selectedContest={tacticList} 
      onClose={CloseModal}
      /> : null}
    </>
  )
}

export default ContestTaticModal