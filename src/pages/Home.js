import React from 'react';
import styled from 'styled-components';

export default function Home() {
    return (
        <HomeContainer>
            <Types>
                Cookies Recheados
            </Types>
            <Types>
                Cookie Chips
            </Types>
            <Types>
                Cookie Caixa
            </Types>
            <Types>
                Palha Italiana
            </Types>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
`;

const Types = styled.h2`
    font-size: 22px;
    font-family: 'Righteous', cursive;
    margin: 10px;
    color: #C42021;
    padding: 20px;
`;