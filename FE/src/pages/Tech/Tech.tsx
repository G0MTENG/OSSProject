import styled, { keyframes } from 'styled-components'
import { icons1, icons2, icons3 } from './Icons'

export default function Tech() {
    return (
        <IconsContainer>
            {[icons1, icons2, icons3].map((icons, rowIndex) => (
                <Row
                    key={rowIndex}
                    direction={rowIndex % 2 === 0 ? 'left' : 'right'}
                >
                    {icons.map((icon, index) => (
                        <Icon key={index}>
                            <StyledImage src={icon} alt={`icon-${index}`} />
                        </Icon>
                    ))}
                </Row>
            ))}
        </IconsContainer>
    )
}

// 애니메이션 키프레임 정의
const moveLeftToRight = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

const moveRightToLeft = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`

// 스타일드 컴포넌트 정의
const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: calc(90vh - 1px);
    background-color: #000;
    overflow: hidden;
`

const Row = styled.div<{ direction: 'left' | 'right' }>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    overflow: hidden;
    margin: 20px 0; // 행 간의 공간 추가
    animation: ${({ direction }) =>
            direction === 'left' ? moveLeftToRight : moveRightToLeft}
        20s linear infinite;
`

const Icon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px; // 아이콘 간의 공간 추가
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    filter: invert(100%);
`
