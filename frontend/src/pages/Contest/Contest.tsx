import React from 'react'
import CurrentContest from '../../components/Contest/Main/CurrentContest'
import ExpectedContest from '../../components/Contest/Main/ExpectedContest'

function Contest(){
  return(
    <div>
      <CurrentContest/>
      <ExpectedContest/>
    </div>
  )
};

export default Contest