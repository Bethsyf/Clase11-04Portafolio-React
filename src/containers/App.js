import React from 'react'
import About from '../components/About'
import { Education } from '../components/Education'
import Profile from '../components/Profile'
import styled from 'styled-components'

const App = () => {

    const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

    return (
        <GlobalStyle>
            <About />
            <Education />
        </GlobalStyle>
    )
}

export default App
