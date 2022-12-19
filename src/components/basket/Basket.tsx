import React from 'react';

import {
    BasketButtonsContainer,
    BasketContainer,
    BasketContainerHeader, BasketContainerHeaderIcon,
    BasketContainerHeaderName,
    BasketContainerHeaderNameAndIcon,
    PizzasCount, PizzasPrice,
    RectangleImage,
    TotalPizzas,
    TotalPizzasContainer, TotalPizzasPrice
} from "./basket.style";

import Header from "../navbar/Header";
import darkBasket from '../../assets/darkBasket.png'
import deleteIcon from '../../assets/deleteIcon.svg'
import rectangle from '../../assets/Rectangle 3.png'
import leftArrows from '../../assets/leftArrow.svg'

const Basket = () => {
    return (
        <div>
            <Header isBasket={true}/>
            <BasketContainer>

                <BasketContainerHeader>
                    <BasketContainerHeaderNameAndIcon>
                        <BasketContainerHeaderIcon><img src={darkBasket} alt="basket"/></BasketContainerHeaderIcon>
                        <BasketContainerHeaderName>Корзина</BasketContainerHeaderName>
                    </BasketContainerHeaderNameAndIcon>
                    <div>
                        <button><img src={deleteIcon} alt="deleteIcon"/>Очистить корзину</button>
                    </div>
                </BasketContainerHeader>
                <RectangleImage>
                    <img src={rectangle} alt=""/>
                </RectangleImage>


                <div>pizzas basket list</div>
                <TotalPizzasContainer>
                    <TotalPizzas>Всего пицц:
                        <PizzasCount>3 шт</PizzasCount>
                    </TotalPizzas>
                    <TotalPizzasPrice>Сумма заказа:
                        <PizzasPrice>900 ₽</PizzasPrice></TotalPizzasPrice>
                </TotalPizzasContainer>
                <BasketButtonsContainer>
                    <button><img src={leftArrows} alt=""/>Вернуться назад</button>
                    <button>Оплатить сейчас</button>
                </BasketButtonsContainer>
            </BasketContainer>
        </div>
    );
};

export default Basket;
