import React from 'react'
import { CertificationsContainer } from '../styles/CertificationStyled'
import { H2Styled } from '../styles/H2Styled'

export const Certifications = () => {
    return (
        <div>
            <H2Styled name="Certificaciones" />
            <CertificationsContainer>
                <div className='certifications-item'>
                    <h2>Google Cloud Platform</h2>
                    </div>                
            </CertificationsContainer>
        </div>
    )
}
