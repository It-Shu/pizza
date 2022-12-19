import React from 'react';
import {LogoContainer, LogoImage, ProjectName, ProjectNameContainer, ProjectNameDescription} from "./logo.style";
import pizzaLogo from '../../../assets/pizzaLogo.png'

const Logo = () => {

    return (
        <LogoContainer>
            <LogoImage>
                <img src={pizzaLogo} alt=""/>
            </LogoImage>
            <ProjectNameContainer>
                <ProjectName>REACT PIZZA</ProjectName>
                <ProjectNameDescription>самая вкусная пицца во вселенной</ProjectNameDescription>
            </ProjectNameContainer>
        </LogoContainer>
    );
};

export default Logo;
