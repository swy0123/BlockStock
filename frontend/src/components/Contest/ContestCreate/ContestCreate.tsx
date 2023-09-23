import React, {useState, useEffect} from "react";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './style.css'
import { useNavigate } from "react-router-dom";

import {
    Container,
    Header,
    CreateTitle,
    CreateImage,
    CreateNickName,
    ContestNameBox,
    ContestName,
    ContestNameInput,
    ContestStock,
    StockName,
    ContestStockInput,
    ContestPeriod,
    PeriodName,
    ContestEtc,
    ContestTicket,
    ContestContentBox,
    ContentName,
    ContestContent,
    BtnBox,
    CreateBtn,
    CancelBtn,
    MaxCapacityBox,
    MaxCapacityName,
    MaxCapacityInput
} from './ContestCreate.style'

// 대회생성 api
import { contestCreate } from "../../../api/Admin/Admin";

function ContestCreate({onClose, selectedContest}){

    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [stockName, setStockName] = useState('')
    const [ticket, setTicket] = useState('티켓 개수')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [activeButton, setActiveButton] = useState('one');
    const [content, setContent] = useState('')
    const [maxCapacity, setmaxCapacity] = useState(0)

    useEffect(()=>{
        if(selectedContest){
            setTitle(selectedContest.title)
            setStartDate(new Date(selectedContest.startAt))
            setEndDate(new Date(selectedContest.endAt))
            setContent(selectedContest.content)
            setTicket(selectedContest.ticket)
        }
    },[])


    const handleButtonClick = (key) => {
        setActiveButton(key);
    };

    
    const buttons = [
        <div className="btns">
            <button
                className={`btn ${activeButton === 'one' ? 'active' : ''}`}
                onClick={() => handleButtonClick('one')}
            >
                15초
            </button>
            <button
                className={`btn ${activeButton === 'two' ? 'active' : ''}`}
                onClick={() => handleButtonClick('two')}
            >
                일단
            </button>
            <button
                className={`btn ${activeButton === 'three' ? 'active' : ''}`}
                onClick={() => handleButtonClick('three')}
            >
                15초로
            </button>
            <button
                className={`btn ${activeButton === 'four' ? 'active' : ''}`}
                onClick={() => handleButtonClick('four')}
            >
                ^^
            </button>
        </div>
    ]
    
    const handleChange =()=>{
        console.log(selectedContest)
        const startformattedDate = `${startDate.getFullYear()}-${(startDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${startDate.getDate().toString().padStart(2, "0")} ${
                startDate.getHours().toString().padStart(2, "0")
          }:${startDate.getMinutes().toString().padStart(2, "0")}:${startDate.getSeconds().toString().padStart(2, "0")}`;
        const endformattedDate = `${endDate.getFullYear()}-${(endDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${endDate.getDate().toString().padStart(2, "0")} ${
                endDate.getHours().toString().padStart(2, "0")
          }:${endDate.getMinutes().toString().padStart(2, "0")}:${endDate.getSeconds().toString().padStart(2, "0")}`;
        console.log(`
        title ${title} 
        stockName ${stockName} 
        ticket ${ticket} 
        startDate ${startformattedDate} 
        endDate ${endformattedDate}
        activeButton ${activeButton}
        content ${content}
        maxCapacity ${maxCapacity}
        `)
        const formData = {
            memberId:1,
            title: title,
            content: content,
            startTime:startformattedDate,
            endTime:endformattedDate,
            maxCapacity:maxCapacity,
            term: 15,
            ticket:Number(ticket),
            optionCode:stockName
        }
        console.log('대회생성')

        if(!selectedContest){
            contestCreate(formData)
        }
    }

    const handleClose = () =>{
        console.log('모달 닫기')
        onClose()
    }

    return(
        <Container>

            <Header>
                <LibraryAddIcon style={{width:'22px', height: '22px', margin:'7px 10px 0px 0px'}}/>   
                <CreateTitle>대회 생성</CreateTitle>
                <CreateImage src='./icon/user_purple.png'/>
                <CreateNickName>Admin</CreateNickName>
            </Header>
            <hr style={{width:'99.7%', background:'##D3D3D3'}}/>

            <ContestNameBox>
                <ContestName>대회명</ContestName>
                <ContestNameInput 
                name= 'title' 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </ContestNameBox>

            <ContestStock>
                <StockName>종목명</StockName>
                <ContestStockInput
                name= 'stockname' 
                value={stockName}
                onChange={(e)=>setStockName(e.target.value)}
                />
            </ContestStock>

            <ContestPeriod style={{display:'flex'}}>
                <PeriodName>대회 일정</PeriodName>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    className="custom-datepicker"
                />

                <div style={{margin:'17px 15px 0px 15px', fontSize: '20px', fontWeight:'bold'}}>~</div>

                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    className="custom-datepicker"
                />
            </ContestPeriod>

            <ContestEtc>
                <ContestTicket 
                type="number" 
                min="0" 
                placeholder="티켓 개수"
                name= 'ticket ' 
                value={ticket}
                onChange={(e)=>
                    setTicket(e.target.value)
                }
                style={{height:'20px', width:'50px', fontSize:'13px'}}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                        height:'40px'
                    }}
                    >
                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                        {buttons}
                    </ButtonGroup>
                </Box>
            </ContestEtc>
            
            <ContestContentBox>
                <ContentName>상세 내용</ContentName>
                <ContestContent
                name= 'content ' 
                value={content}
                onChange={(e)=>
                    setContent(e.target.value)
                }
                />
            </ContestContentBox>
            <MaxCapacityBox>
                <MaxCapacityName>
                    참여인원
                </MaxCapacityName>
                <MaxCapacityInput onChange={(e)=>setmaxCapacity(e.target.value)} value={maxCapacity} type="number" min={0}/>
            </MaxCapacityBox>

  
            <hr style={{margin:'10px 0px 0px 0px', width:'99.7%', background:'##D3D3D3'}}/>
            
            {selectedContest ? (
            <BtnBox>
                <CreateBtn onClick={handleChange}>생성</CreateBtn>
                <CancelBtn onClick={handleClose}>취소</CancelBtn>
            </BtnBox>) : (
            <BtnBox style={{margin:'20px 0px 0px 500px'}}>
                <CreateBtn onClick={handleChange}>생성</CreateBtn>
                {/* <CancelBtn onClick={handleClose}>취소</CancelBtn> */}
            </BtnBox>
            )}

        </Container>
    )
}

export default ContestCreate
