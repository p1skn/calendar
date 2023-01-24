

import Daysgrid from '../daysGrid/Daysgrid';
import Monitor from '../monitor/Monitor';
import styled from 'styled-components';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { getMonth } from '../../until';
import GlobalContext from '../../context/GlobalContext';
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
  position: relative;
`;

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex]);

  return (
    <AppWrapper className="App">
      <MainWrapper>
        <Monitor currentMonth={currentMonth} />
        <Daysgrid currentMonth={currentMonth} />
      </MainWrapper>
    </AppWrapper>
  );
}

export default App;
