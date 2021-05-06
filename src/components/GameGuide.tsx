import * as React from 'react';
import styled from 'styled-components';
import Guide from '../assets/etc/guide.png';

const GuideContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
`;

const GuideWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 47%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
`;

const GuideImageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const GuideImage = styled.img.attrs({
    src: Guide
})`
    width: 100%;
`;

const ConfirmButton = styled.button`
    background: #ff686e;
    margin-top: 50px;
    color: #ffffff;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    border: 3px solid black;
    border-radius: 20px;
    font-size: 120%;
    font-weight: 600;
    width: 50%;
    padding: 1.5%;
    cursor: pointer;
    margin-top:0px;
`;

type GameGuideProps = {
    isGuideCheck: boolean;
    onCheckGuide: () => void;
};

const GameGuide = ({
    isGuideCheck,
    onCheckGuide
}: GameGuideProps) => {
    return (
        <GuideContainer>
            <GuideWrapper>
                <GuideImageWrapper>
                    <GuideImage />
                </GuideImageWrapper>
                <ConfirmButton>확인</ConfirmButton>
            </GuideWrapper>
        </GuideContainer>
    )
}

export default GameGuide;