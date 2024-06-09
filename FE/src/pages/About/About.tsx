import styled from 'styled-components'
import Memoji from '../../assets/img/Memoji.svg'
import { FaGithubAlt, FaInstagram } from 'react-icons/fa'
import { SiVelog } from 'react-icons/si'

export default function About() {
    const str = [
        '안녕하세요! 소프트웨어학부 22학번 공태윤입니다.',
        '웹페이지에 방문해주셔서 감사합니다.',
        '아직 방명록을 작성하지 않으셨다면, 로고를 클릭해주세요!',
    ]
    return (
        <Wrapper>
            <Image src={Memoji}></Image>
            <SpeechBubble>
                {str.map((s, index) => (
                    <div key={index}>{s}</div>
                ))}
                <IconWrapper>
                    <IconLink href="https://github.com/G0MTENG">
                        <FaGithubAlt />
                    </IconLink>
                    <IconLink href="https://velog.io/@gomteng03/posts">
                        <SiVelog />
                    </IconLink>
                    <IconLink href="https://www.instagram.com/gyum0_0/">
                        <FaInstagram />
                    </IconLink>
                </IconWrapper>
            </SpeechBubble>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
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
    flex-direction: column;
    overflow: hidden;

    div {
        margin: 0.4rem;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    bottom: 5%;
    right: 5%;
    display: flex;
    gap: 1rem;
`

const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 2rem;

    &:hover {
        color: #666;
    }
`
