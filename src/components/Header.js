import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <Image src="https://media1.giphy.com/media/xUPGcyuLXBczDypC0M/giphy.gif" />
                Cookies da gema
                <Image src="https://media1.giphy.com/media/xUPGcyuLXBczDypC0M/giphy.gif" />
            </div>
            <Subtitle>
                adoçando a vida de todo carioca
            </Subtitle>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 32px;
    font-family: 'Righteous', cursive;
    position: fixed;
    top: 0;
    right: 0;
    padding: 15px;
    text-align: center;
    background-image: linear-gradient(-90deg, #FFC857, #DB3A34);
    color: #FFF;
    
    div {
        display: flex;
        margin-top: 10px;
    }
`;

const Subtitle = styled.h1`
    font-size: 22px;
    font-family: 'Righteous', cursive;
    margin: 10px;
`;  

const Image = styled.img`
    height: 80px;
    margin: -20px 50px;
`;