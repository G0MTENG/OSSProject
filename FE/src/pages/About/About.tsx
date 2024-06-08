import styled from 'styled-components'
import Memoji from '../../assets/img/Memoji.svg'

export default function About() {
    const string =
        '안녕하세요! 광운대학교 소프트웨어학부 22학번 공태윤입니다. 웹페이지에 방문하신 것을 환영합니다!'
    return (
        <Wrapper>
            <Image src={Memoji}></Image>
            <SpeechBubble>{string}</SpeechBubble>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    /* padding: 12% 4%; */
`

const Image = styled.img`
    width: 16%;
    position: absolute;
    bottom: 12%;
    left: 4%;
`

const SpeechBubble = styled.div`
    width: 70%;
    height: 40%;
    background-color: #d9d9d9;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    right: 4%;
    top: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: 500;
    font-size: 2rem;
`
