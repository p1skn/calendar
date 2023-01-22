
import moment from 'moment/moment';
import Daysgrid from '../daysGrid/Daysgrid';
import Monitor from '../monitor/Monitor';
import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';

const AppWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainWrapper = styled.div`
  min-width: 700px;
  max-width: 700px;
`;


function App() {
  moment.updateLocale("en", {week: {dow: 1}});
  const [today, setToday] = useState(moment());

  const monthNext = () => { setToday(next => next.clone().add(1, "month")); };
  
  const monthEarly = () => { setToday(early => early.clone().subtract(1, "month")); };
  const todayFun = () => { setToday(moment()); };

  const startDay = today.clone().startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const weekDay = today.clone().startOf("week").subtract(1, "day");
  const calendar = [...Array(42)].map(() => day.add(1, "day").clone());
  const weekList = [...Array(7)].map(() => weekDay.add(1, "day").clone().format("ddd"));

  return (
    <AppWrapper className="App">
      <MainWrapper>
        <Monitor 
        month={today.format("MMMM")} 
        year={today.format("YYYY")}
        fun1={monthNext}
        fun2={monthEarly}
        today={todayFun}
        />
        <Daysgrid days={calendar} week={weekList}/>
      </MainWrapper>
      
    </AppWrapper>
  );
}

export default App;
