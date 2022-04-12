import React from 'react';
import { H2Styled } from '../styles/H2Styled';
import { SkillsContainer } from '../styles/SkillsStyled';

export const Skills = () => {
    return (
        <div>
            <H2Styled name="Skills" />
            <SkillsContainer>
                <div className='Skills-item'>
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>JavaScript</h4>
                    <h4>ReactJS</h4>                    
                </div>                
            </SkillsContainer>
        </div>
    )
}