import React from 'react';
import Day from '../day/Day';
import styled from 'styled-components';
import dayjs from 'dayjs';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    min-width: 700px;
    background-color: gray;
    gap: 2px;
    border: 2px solid gray;
`;

const DaysWrapper = styled.div`
    padding: 5px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    font-weight: 700;
    color: gray;
    background-color: white;
`;

const CurrentDay = styled(DaysWrapper)`
    min-height: 30px;
    border-radius: 50%;

    border: 2px solid gray;
`;

const WeekWrapper = styled.div`
    width: 100%;
    border-bottom: 2px solid gray;
`;

const Daysgrid = ({ currentMonth }) => {
const isCurrentDay = (day) => { return (dayjs().format("YY-MM-DD") === day.format("YY-MM-DD")); }

return (
    <GridWrapper>
        {currentMonth.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, index) => (
                    <DaysWrapper key={index + 10}>
                        {i === 0 ? <WeekWrapper>{day.format("ddd")}</WeekWrapper> : <div></div>}
                        {isCurrentDay(day) ? <CurrentDay><Day days={day.format("D")}/></CurrentDay> : <Day days={day.format("D")} />}
                    </DaysWrapper>
                ))}
            </React.Fragment>
        ))}
    </GridWrapper>
);
};

export default Daysgrid;