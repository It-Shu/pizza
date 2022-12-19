import React from 'react';
import {PizzaModalContainer, PizzaModalImageContainer, PizzaDescription, PizzaModalPriceContainer} from "./pizzaModal.style";

interface PizzaModalTypes {
    image: string
    description: string
    price: string
    isAvailable?: boolean
}

const PizzaModal = (props: PizzaModalTypes) => {

    const {
        image,
        description,
        price,
        isAvailable,
    } = props

    return (
        <PizzaModalContainer>
            <PizzaModalImageContainer>
                <div><img src={image} alt=""/></div>
                <PizzaDescription>{description}</PizzaDescription>
            </PizzaModalImageContainer>
            <div>
                <div>
                    <button>тонкое</button>
                    <button>традиционное</button>
                </div>
                <div>
                    <button disabled={isAvailable}>26 см.</button>
                    <button disabled={isAvailable}>30 см.</button>
                    <button>40 см.</button>
                </div>
            </div>
            <PizzaModalPriceContainer>
                <div>от {price} ₽</div>
                <div>
                    <button>Добавтить</button>
                </div>
            </PizzaModalPriceContainer>
        </PizzaModalContainer>
    );
};

export default PizzaModal;
