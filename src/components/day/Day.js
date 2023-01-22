
import React from 'react';
import styled from 'styled-components';

const DayList = styled.div``;


const Day = (props) => {
    return (
        <DayList>
            {props.days}
        </DayList>
    );
};

export default Day;