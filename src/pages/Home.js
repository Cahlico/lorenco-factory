import React from 'react';
import styled from 'styled-components';

export default function Home() {
    return (
        <HomeContainer>
            <Types>
                <TypesTitle>Cookies Recheados</TypesTitle>
                'imagem para seleção aqui' 
            </Types>
            <Types>
                <TypesTitle>Cookie Chips</TypesTitle>
                'imagem para seleção aqui' 
            </Types>
            <Types>
                <TypesTitle>Cookie Caixa</TypesTitle>
                'imagem para seleção aqui' 
            </Types>
            <Types>
                <TypesTitle>Palha Italiana</TypesTitle>
                'imagem para seleção aqui' 
            </Types>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
`;

const Types = styled.div`

`;

const TypesTitle = styled.h2`
    font-size: 22px;
    font-family: 'Righteous', cursive;
    margin: 10px;
    color: #084C61;
    padding: 20px;
`;