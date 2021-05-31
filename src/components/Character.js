import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
background-color: rgba(255, 255, 255, 0.7);
border: 1px solid black;
border-radius: 25px;
text-align: center;
margin: 5% 1px;
`;

const StyledHeader = styled.h1`
margin: 10px 0;
font-size: 2.75rem;
`

const Character = props => {
    const { info } = props
    return (
        <StyledDiv>
            <StyledHeader>{info.name}</StyledHeader>
        </StyledDiv>
    );
};

export default Character;