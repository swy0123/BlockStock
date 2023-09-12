import React, {useState} from "react";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

// import dayjs, { Dayjs } from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

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
    ContestPeriodbutton,
} from './ContestCreate.style'

function ContestCreate(){

    // const [value, setValue] = React.useState<Dayjs | null>(
    //     dayjs("2022-04-17T15:30")
    //   );

    return(
        <Container>

            <Header>
                <LibraryAddIcon style={{width:'25px', height: '25px', margin:'7px 10px 0px 0px'}}/>   
                <CreateTitle>대회 생성</CreateTitle>
                <CreateImage src='./icon/user_purple.png'/>
                <CreateNickName>Admin</CreateNickName>
            </Header>
            <hr style={{width:'650px', background:'##D3D3D3'}}/>

            <ContestNameBox>
                <ContestName>대회명</ContestName>
                <ContestNameInput/>
            </ContestNameBox>

            <ContestStock>
                <StockName>종목명</StockName>
                <ContestStockInput/>
            </ContestStock>

            <ContestPeriod>
                <PeriodName></PeriodName>

                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                        <DateTimePicker
                        label="Uncontrolled picker"
                        defaultValue={dayjs("2022-04-17T15:30")}
                        style={{ color: "red" }}
                        />
                        <DateTimePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider> */}
               
                
            </ContestPeriod>

        </Container>
    )
}

export default ContestCreate

// () => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         timeInputLabel="Time:"
//         dateFormat="MM/dd/yyyy h:mm aa"
//         showTimeInput
//       />
//     );
//   };