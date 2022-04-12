import React from 'react'
import { AboutLocation } from '../styles/AboutStyled'
import { EducationContainer } from '../styles/EducationStyled'
import { H2Styled } from '../styles/H2Styled'

export const Education = () => {
    return (
        <div>
            <H2Styled name="Mis Estudios" />
            <EducationContainer>
                <div className='Education-item'>
                    <h2>Pascual Bravo - <span>2020</span></h2>
                    <AboutLocation>Tecnologia en desarrollo de software</AboutLocation>
                </div>
                <div className='Education-item'>
                    <h2>Estudio2 - <span>2020</span></h2>
                    <AboutLocation>Carrera2</AboutLocation>
                </div>
            </EducationContainer>
        </div>
    )
}