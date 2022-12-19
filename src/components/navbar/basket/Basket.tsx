import React from 'react';
import basket from '../../../assets/basket.svg'
import {BasketContainer, BasketInfo} from "./basket.style";


const Basket = () => {

    return (
        <BasketContainer>
            <BasketInfo>
                520 ₽ | <img src={basket} alt="basket-logo"/> 3
            </BasketInfo>
        </BasketContainer>
    );
};

export default Basket;
