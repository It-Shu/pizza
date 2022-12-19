import React from 'react';
import PizzaModal from "../pizza_modal/PizzaModal";
import CheeseburgerPizza from '../../assets/CheesburgerPizza.png'
import CheesePizza from '../../assets/CheesPizza.png'
import AsianShrimp from '../../assets/AsianShrimp.png'
import CheeseChicken from '../../assets/CheeseChicken.png'
import {PizzasListContainer, PizzasListName} from "./pizzasList.style";

const PizzasList = () => {

    return (
        <div>

            <PizzasListName>Все пиццы</PizzasListName>

            <PizzasListContainer>
                <PizzaModal
                    image={CheeseburgerPizza}
                    description={'Чизбургер-пицца'}
                    isAvailable={false}
                    price={'395'}
                />
                <PizzaModal
                    image={CheesePizza}
                    description={'Сырная'}
                    isAvailable={true}
                    price={'450'}
                />
                <PizzaModal
                    image={AsianShrimp}
                    description={'Креветки по-азиатски'}
                    isAvailable={false}
                    price={'290'}
                />
                <PizzaModal
                    image={CheeseChicken}
                    description={'Сырный цепленок'}
                    isAvailable={true}
                    price={'385'}
                />
                <PizzaModal
                    image={CheeseburgerPizza}
                    description={'Чизбургер-пицца'}
                    isAvailable={false}
                    price={'395'}
                />
                <PizzaModal
                    image={CheesePizza}
                    description={'Сырная'}
                    isAvailable={true}
                    price={'450'}
                />
                <PizzaModal
                    image={AsianShrimp}
                    description={'Креветки по-азиатски'}
                    isAvailable={false}
                    price={'290'}
                />
                <PizzaModal
                    image={CheeseChicken}
                    description={'Сырный цепленок'}
                    isAvailable={true}
                    price={'385'}
                />
            </PizzasListContainer>
        </div>
    );
};

export default PizzasList;
