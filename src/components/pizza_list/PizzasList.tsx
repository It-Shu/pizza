import React from 'react';
import PizzaModal from "../pizza_modal/PizzaModal";
import CheeseburgerPizza from '../../assets/CheesburgerPizza.png'
import CheesePizza from '../../assets/CheesPizza.png'
import AsianShrimp from '../../assets/AsianShrimp.png'
import CheeseChicken from '../../assets/CheeseChicken.png'
import {PizzasListContainer, PizzasListName} from "./pizzasList.style";
import {PizzaType} from "../sort/PizzasListSort";

interface PizzasListType {

    pizzaType: PizzaType[]
}

const PizzasList = (props: PizzasListType) => {

    const {
        pizzaType
    } = props

    type PizzasType = {
        image: string
        description: string
        isAvailable: boolean
        price: string
        type: PizzaType
    }

    const pizzasArr: PizzasType[] = [
        {
            image: CheeseburgerPizza,
            description: 'Чизбургер-пицца',
            isAvailable: false,
            price: '395',
            type: PizzaType.MEAT,
        },
        {
            image: CheesePizza,
            description: 'Сырная',
            isAvailable: true,
            price: '450',
            type: PizzaType.VEGETARIAN,
        },
        {
            image: AsianShrimp,
            description: 'Креветки по-азиатски',
            isAvailable: false,
            price: '290',
            type: PizzaType.SPICY,
        },
        {
            image: CheeseChicken,
            description: 'Сырный цепленок',
            isAvailable: false,
            price: '385',
            type: PizzaType.GRILL,
        },
    ]
    const filteredPizzas = pizzasArr.filter(f => {
        return pizzaType.includes(f.type)

    })
    console.log(filteredPizzas)

    return (
        <div>

            <PizzasListName>Все пиццы</PizzasListName>

            <PizzasListContainer>
                {
                    filteredPizzas.map(p => {
                        return (
                            <PizzaModal
                            image={p.image}
                            description={p.description}
                            isAvailable={p.isAvailable}
                            price={p.price}
                        />
                        )
                    })}
                { filteredPizzas.map(p => {
                        return (
                            <PizzaModal
                            image={p.image}
                            description={p.description}
                            isAvailable={p.isAvailable}
                            price={p.price}
                        />
                        )
                    })
                }
            </PizzasListContainer>
        </div>
    );
};

export default PizzasList;
