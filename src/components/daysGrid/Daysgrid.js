import React from 'react';
import Day from '../day/Day';
import styled from 'styled-components';
import moment from 'moment';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    max-width: 700px;
`;

const DaysWrapper = styled.div`
    cursor: pointer;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${props => props.isWeekend ?  `#a1a1a1` : `#bbbbbb`};
    border-radius: 50%;
    color: white;
`;

const CurrentDay = styled(DaysWrapper)`
    margin: 0;
    background-color: red;

`;

const WeekWrapper = styled(DaysWrapper)`
    background-color: #6e6e6e;
`;

const isCurrentDay = (day) => moment().isSame(day, 'day');


const Daysgrid = ({days, week}) => {
    return (
        <GridWrapper>
            {week.map( (day, i) => 
            <WeekWrapper key={i}>
                    {day}
            </WeekWrapper>
            )}
            {days.map( (day, i) =>
                <DaysWrapper 
                key={i}
                isWeekend={day.day() === 6 || day.day() === 0}
                >
                    {isCurrentDay(day) 
                    ? 
                    <CurrentDay ><Day days={day.format("D")}/></CurrentDay>
                    : 
                    <Day days={day.format("D")}/>
                    }
                </DaysWrapper>
            )}
        </GridWrapper>
    );
};

export default Daysgrid;