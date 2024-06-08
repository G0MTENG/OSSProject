import styled from 'styled-components'
import Box from './components/Box'
import { useEffect } from 'react'
import { useStore } from '../../store/store.ts'
import axiosInstance from '../../api/axiosInstance.ts'

export default function Visitors() {
    const { visitors, setVisitors } = useStore()

    const getData = async () => {
        axiosInstance.get('/').then((res: any) => {
            setVisitors(res.data.visitors)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Wrapper>
            <Title>Visitors: {visitors.length}</Title>
            <BoxWrapper>
                {visitors.map(({ name, cheer }, index) => (
                    <Box key={index} name={name} cheer={cheer} />
                ))}
            </BoxWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 90vw;
    margin: 0 5vw;
    box-sizing: border-box;
`

const BoxWrapper = styled.div`
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    gap: 3vw;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 2rem 2rem;
    color: #fff;
`
