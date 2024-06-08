import { Routes, Route, Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './pages/Error/Error'
import Visit from './pages/Visit/Visit'
import About from './pages/About/About'
import Tech from './pages/Tech/Tech'
import Visitors from './pages/Visitors/Visitors'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Visit />} />
                <Route path="about" element={<About />} />
                <Route path="tech" element={<Tech />} />
                <Route path="visitors" element={<Visitors />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

function Layout() {
    return (
        <div>
            <Hamburger>
                <Logo to="/">TY</Logo>
                <StyledLink to="/about">ABOUT</StyledLink>
                <StyledLink to="/tech">TECH</StyledLink>
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

const Logo = styled(Link)`
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
