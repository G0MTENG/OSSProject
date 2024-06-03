import { Routes, Route, Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './pages/Error/Error'
import VISIT from './pages/Visit/Visit'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<VISIT />} />
                <Route path="about" element={<div>about</div>} />
                <Route path="tech" element={<div>tech</div>} />
                <Route path="portpolio" element={<div>portpolio</div>} />
                <Route path="contact" element={<div>contact</div>} />
                <Route path="visitors" element={<div>visitors</div>} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

function Layout() {
    return (
        <div>
            <Hamburger>
                <Logo>TY</Logo>
                <StyledLink to="/about">ABOUT</StyledLink>
                <StyledLink to="/tech">TECH</StyledLink>
                <StyledLink to="/portpolio">PORTFOLIO</StyledLink>
                <StyledLink to="/contact">CONTACT</StyledLink>
                <StyledLink to="/visitors">VISITORS</StyledLink>
            </Hamburger>
            <Outlet />
        </div>
    )
}

const Hamburger = styled.div`
    width: 100%;
    border-bottom: 0.1px solid white;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`

const Logo = styled.h1`
    font-size: 54px;
    font-weight: 900;
    padding-top: 15px;
    margin-left: 5%;
`

const StyledLink = styled(Link)`
    &:not(:first-child) {
        margin-left: 3%;
    }
`
