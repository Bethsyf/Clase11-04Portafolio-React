import React from "react";
import { AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutStyle } from '../styles/AboutStyled'

const About = () => {
    return (
        <AboutStyle>
            <div className="About-Container">
                <AboutAvatar>
                    <figure>
                        <AboutImg src="/" alt="Imagen" />
                    </figure>
                </AboutAvatar>
                <AboutName>
                    <AboutH2>Pepito Perez</AboutH2>
                </AboutName>
                <AboutProfession>Instructor Academia Geek</AboutProfession>
                <AboutLocation>Medellín, Colombia</AboutLocation>
                <div className="About-social">
                    <p>Redes sociales</p>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About