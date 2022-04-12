import React from 'react'
import About from '../components/About'
import { Education } from '../components/Education'
import Profile from '../components/Profile'
import styled from 'styled-components'
import { Experience } from '../components/Experience'
import { Certifications } from '../components/certifications'
import { Skills } from '../components/skills'

const App = () => {

    const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
        
    }
    .wrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        grid-template-rows: repeat(5, auto);
    }
    .cont1{
        grid-column: 1/2;
        grid-row: 1/5;
        
    }
    .cont2{
        grid-column: 2/3;
        grid-row: 1/2;
        border: 2px solid;
        border-color: orange;
        
    }
    .cont3{
        grid-column: 2/3;
        grid-row: 2/3;
        border: 2px solid;
        border-color: rebeccapurple;
       
    }
    .cont4{
        grid-column: 2/3;
        grid-row: 3/4;
        border: 2px solid;
        border-color: greenyellow;
    }
    .cont5{
        grid-column: 2/3;
        grid-row: 4/5;
        border: 2px solid;
        border-color: brown;
    }
    
`;

    return (
        <GlobalStyle>
            <div className="wrapper">
            <div className='cont1'>
            <About />
            </div>
            <div className='cont2'>
            <Education />
            </div>
            <div className='cont3'>
            <Experience />
            </div>
            <div className='cont4'>
            <Certifications/>
            </div>
            <div className='cont5'>
            <Skills/>
            </div>
            </div>
        </GlobalStyle>
    )
}

export default App
