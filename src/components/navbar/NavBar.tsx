import React from 'react';
import Logo from "./logo/Logo";
import Basket from "./basket/Basket";
import {NavBarContainer} from './navbar.style';

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo/>
            <Basket/>
        </NavBarContainer>
    );
};

export default NavBar;
