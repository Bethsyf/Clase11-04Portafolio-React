import React from 'react';
import { AboutLocation } from '../styles/AboutStyled';
import { ExperienceContainer } from '../styles/ExperienceStyled'
import { H2Styled } from '../styles/H2Styled'


export const Experience = () => {
    return (
        <div>
            <H2Styled name="Experiencia" />
            <ExperienceContainer>
                <div className='Experience-item'>
                    <h2>Coordinador Geek</h2>
                    <AboutLocation>Desarrollando Personas en Geek Academy</AboutLocation>
                </div>                
            </ExperienceContainer>
        </div>
    )
}