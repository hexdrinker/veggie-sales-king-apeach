import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../assets/etc/game-title.png';
import Logo from '../assets/etc/game-logo.png';

const Container = styled.div`
    background-color: #9b6b69;
    max-width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const TitleImage = styled.img.attrs({
    src: Title
})`
    width: 80%;
`;

const LogoImage = styled.img.attrs({
    src: Logo
})`
    width: 70%;
`;

const ButtonGroup = styled.div`
    width: 80%;
    margin-top: 30px;
`;

const StartButton = styled(Link)`
    display: block;
    width: 100%;
    color: #ffffff;
    text-align: center;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    border: 1.5px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #efcf00;
    font-size: 3rem;
    font-weight: 600;
    padding: 10px;

    @media (max-width: 359px) {
        font-size: 2rem;
    }
`

const Home: React.FC = () => {
    return (
        <Container>
            <TitleImage />
            <LogoImage />
            <ButtonGroup>
                <StartButton to="/game">START</StartButton>
            </ButtonGroup>
        </Container>
    )
}

export default Home;