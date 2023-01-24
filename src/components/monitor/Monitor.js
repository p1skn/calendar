import dayjs from 'dayjs';
import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';

const MonitorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: gray;
`;

const Date = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    width: 300px;
`;

const Buttons = styled.div`
    width: 150px;
    justify-content: flex-start;
`;

const Button = styled.button`
    cursor: pointer;
    margin: 5px;
    padding: 3px 7px;
    border: 2px solid gray;
    border-radius: 50px;
    background-color: white;
    font-weight: 700;
    color: gray;
`;

const Monitor = (props) => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);
    return (
        <MonitorWrapper>
            <Date>
                <h1>{dayjs(new window.Date(dayjs().year(), monthIndex)).format("YYYY MMMM")}</h1>
            </Date>
            <Buttons>
                <Button onClick={() => { setMonthIndex(monthIndex - 1) }}>&lt;</Button>
                <Button onClick={() => { setMonthIndex(monthIndex) }}>Today</Button>
                <Button onClick={() => { setMonthIndex(monthIndex + 1) }}>&gt;</Button>
            </Buttons>
        </MonitorWrapper>
    );
};

export default Monitor;