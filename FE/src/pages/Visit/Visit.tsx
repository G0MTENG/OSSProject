import React, { useState } from 'react'
import styled from 'styled-components'
import ProfileImg from '../../assets/img/profile.png'
import { FaPencilAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Visit() {
    const visitors: number = 10
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState('')
    const [cheer, setCheer] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        if (name === '') {
            alert('방문자명을 입력해주세요')
            return
        }

        setIsModalOpen(true)
    }

    const handleCheer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheer(e.target.value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleInputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    const handleCheerOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submit()
        }
    }

    const submit = () => {
        if (cheer === '') {
            alert('응원의 한 마디를 입력해주세요')
            return
        }
        setIsModalOpen(false)
        alert(
            `${name}님의 "${cheer}" 한 마디 감사합니다❤️❤️\n즐거운 하루 보내세요 ~!`
        )

        navigate('/About')
    }

    return (
        <FlexWrapper>
            <Wrapper>
                <Img src={ProfileImg}></Img>
                <Visiers>VISITORS : {visitors}</Visiers>
                <InputWrapper>
                    <PenIcon></PenIcon>
                    <Input
                        placeholder="방문자명을 입력해주세요"
                        onChange={handleChange}
                        onKeyDown={handleInputOnKeyDown}
                    ></Input>
                    <SelectVisit onClick={handleClick}>방문하기</SelectVisit>
                </InputWrapper>
            </Wrapper>
            {isModalOpen && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>{name}님 방문을 환영합니다!!</ModalHeader>
                        <CheerInput
                            onChange={handleCheer}
                            onKeyDown={handleCheerOnKeyDown}
                            placeholder="응원의 한 마디를 적어주세요!"
                        ></CheerInput>
                        <ModalButton onClick={submit}>입장하기</ModalButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 60%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img = styled.img`
    width: 20vw;
    height: 20vw;
    margin: 5vh 0;
`

const Visiers = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 2vh 0;
`

const InputWrapper = styled.div`
    margin-top: 5vh;
    width: 100%;
    height: 23vh;
    background-color: #d9d9d9;
    border-radius: 15px;
    position: relative;
`

const PenIcon = styled(FaPencilAlt)`
    top: 20px;
    left: 20px;
    font-size: 2rem;
    color: #000;
    position: absolute;
`

const SelectVisit = styled.div`
    width: 18%;
    height: 20%;
    bottom: 5px;
    right: 5px;
    background-color: #6d62ec;
    border-radius: 80px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: 600;
    &:hover {
        background-color: #5a4bbd;
    }
`

const Input = styled.input`
    width: 60%;
    height: 20%;
    position: absolute;
    top: 40%;
    bottom: 40%;
    left: 20%;
    right: 20%;
    text-align: center;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    outline: none;
`

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: white;
    border-radius: 8px;
    width: 80%;
    height: 20%;
    max-width: 500px;
    position: relative;
`

const ModalHeader = styled.div`
    margin-top: 15px;
    color: #000;
    font-weight: 600;
`

const ModalButton = styled.button`
    background-color: #6d62ec;
    width: 20%;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #5a4bbd;
    }
`

const CheerInput = styled.input`
    text-align: center;
    height: 30%;
    width: 50%;
    outline: none;
    border: none;
`
