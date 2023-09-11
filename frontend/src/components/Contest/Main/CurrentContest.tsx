import React, {useState} from 'react'
import { 
  CurrentContestTitle,
  CurrentContestBox,
  ContestHeader,
  ContestTitle,
  Contestperiod,
  CurrentContestList,
  CurrentContestLink,
  // CurrentContestRankBox,
 } from './CurrentContest.style'

function CurrentContest(){

  const [title, setTitle] = useState<string>('title')
  const [period, setPeriod] = useState<string>('2023-09-11 ~ 2023-09-12')
  const [currentContestList, setCurrentContestList] = useState<string[]>([]);

  return(
    <div>
      <CurrentContestTitle>
        현재 대회 결과
      </CurrentContestTitle>

      <CurrentContestBox>

        <ContestHeader>
          <ContestTitle>{title}</ContestTitle>
          <Contestperiod>{period}</Contestperiod>
        </ContestHeader>

        <CurrentContestList>
          <CurrentContestLink>
            <div>현재 대회 정보</div>
            <div>현재 현황 조회</div>
          </CurrentContestLink>


        </CurrentContestList>

        </CurrentContestBox>
    </div>
  )
};


export default CurrentContest