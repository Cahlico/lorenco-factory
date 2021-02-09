import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            Cookie da gema
            <Subtitle>
                adoçando a vida de todo carioca
            </Subtitle>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    font-size: 32px;
    font-family: 'Righteous', cursive;
    position: fixed;
    top: 0;
    right: 0;
    padding: 25px;
    text-align: center;
    background-image: linear-gradient(-45deg, #FFC857, #DB3A34);
    color: #FFF;
`;

const Subtitle = styled.h1`
    font-size: 22px;
    font-family: 'Righteous', cursive;
    margin: 10px;
`;  