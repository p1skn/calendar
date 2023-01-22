import React from 'react';
import styled from 'styled-components';

const MonitorWrapper = styled.div`
    border-radius: 20px;
    background-color: #6e6e6e;
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Date = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    color: white;
    min-width: 200px;
    justify-content: space-between;
    align-items: center;
`;

const Buttons = styled.div`
    margin-right: 20px;
`;

const Button = styled.button`
    margin: 5px;
    padding: 3px 7px;
    border: 2px solid white;
    border-radius: 50px;
    background-color: #6e6e6e;
    font-weight: 700;
    color: white;
    cursor: pointer;
`;

const Monitor = (props) => {
    return (
        <MonitorWrapper>
            <Date>
                <h1>{props.year}</h1>
                <h2>{props.month}</h2>
            </Date>
            <Buttons>
                <Button onClick={props.fun2}>&lt;</Button>
                <Button onClick={props.today}>Today</Button>
                <Button onClick={props.fun1}>&gt;</Button>
            </Buttons>
        </MonitorWrapper>
    );
};

export default Monitor;