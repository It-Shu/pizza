import React from 'react';
import sadSmile from '../../assets/sadSmile.png'
import emptyBasket from '../../assets/emptyBasket.png'
import {EmptyBasketContainer} from './emptyBasket.style';
import Header from "../navbar/Header";

const EmptyBasket = () => {
    return (
<div>
    <Header isBasket={true}/>
    <EmptyBasketContainer>

        <div>Корзина пустая <img src={sadSmile} alt=""/></div>
        <div>Вероятней всего, вы не заказывали ещё пиццу.</div>
        <div> Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
        <div><img src={emptyBasket} alt=""/></div>
        <div><button>Вернуться назад</button></div>
    </EmptyBasketContainer>
</div>

    );
};

export default EmptyBasket;
