import styled from 'styled-components'
import { useState } from 'react'

interface BoxProps {
    name: string
    cheer: string
}

const Box: React.FC<BoxProps> = ({ name, cheer }) => {
    const [isClick, setIsClick] = useState(false)
    const handleClick = () => setIsClick(!isClick)

    return (
        <BoxWrapper onClick={handleClick}>
            <BoxContainer isClick={isClick}>
                <FrontFace isClick={isClick}>
                    <Text>{name}</Text>
                </FrontFace>
                <BackFace isClick={isClick}>
                    <Text>{cheer}</Text>
                </BackFace>
            </BoxContainer>
        </BoxWrapper>
    )
}

const BoxWrapper = styled.div`
    perspective: 1000px;
`

const BoxContainer = styled.div<{ isClick: boolean }>`
    width: 20vw;
    height: 20vw;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${({ isClick }) =>
        isClick ? 'rotateY(180deg)' : 'rotateY(0deg)'};

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: ${({ isClick }) =>
            isClick
                ? 'rotateY(180deg) scale(1.05)'
                : 'rotateY(0deg) scale(1.05)'};
    }
`

const Face = styled.div<{ isClick: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: 1vw;
    box-sizing: border-box;
    text-align: center;

    &:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }
`

const FrontFace = styled(Face)`
    background-color: #ffb703;
`

const BackFace = styled(Face)`
    background-color: #219ebc;
    transform: rotateY(180deg);
`

const Text = styled.p`
    margin: 0;
    font-size: 1.5rem;
    color: white;
    word-break: break-word;
    white-space: pre-wrap;
`

export default Box
