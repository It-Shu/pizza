import React from 'react';
import Logo from "./logo/Logo";
import Basket from "./basket/Basket";
import {NavBarContainer} from './header.style';
import rectangle from "../../assets/Rectangle 2.png";
import {Rectangle} from "../sort/pizzasSort.style";

interface NavBarTypes {
    isBasket?: boolean
}

const Header = (props: NavBarTypes) => {
    const {
        isBasket
    } = props

    if (isBasket) {
        return (
            <div>
                <NavBarContainer>
                    <Logo/>
                </NavBarContainer>
                <Rectangle>
                    <img src={rectangle} alt="rectangle"/>
                </Rectangle>
            </div>
        );
    }
    return (
        <div>
            <NavBarContainer>
                <Logo/>
                <Basket/>
            </NavBarContainer>
            <Rectangle>
                <img src={rectangle} alt="rectangle"/>
            </Rectangle>
        </div>
    );
};

export default Header;
