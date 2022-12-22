import React, {useState} from 'react';
import {ButtonsPizzaSort, PizzaSortSelect, PizzasSortContainer} from "./pizzasSort.style";
import PizzasList from "../pizza_list/PizzasList";

export enum PizzaType {
    MEAT = 'MEAT',
    VEGETARIAN = 'VEGETARIAN',
    SPICY = 'SPICY',
    GRILL = 'GRILL',
}

const PizzasListSort = () => {

    const [type, setType] = useState<PizzaType[]>([])

    const setAllPizzasSort = () => {
        return setType([PizzaType.MEAT, PizzaType.GRILL, PizzaType.VEGETARIAN, PizzaType.SPICY])
    }

    const setMeatPizzasSort = () => {
        return setType([PizzaType.MEAT])
    }
    const setGrillPizzasSort = () => {
        return setType([PizzaType.GRILL])
    }
    const setVegetarianPizzasSort = () => {
        return setType([PizzaType.VEGETARIAN])
    }
    const setSpicyPizzasSort = () => {
        return setType([PizzaType.SPICY])
    }


    return (
        <div>
            <PizzasSortContainer>
                <ButtonsPizzaSort>
                    <button onClick={setAllPizzasSort}>Все</button>
                    <button onClick={setMeatPizzasSort}>Мясные</button>
                    <button onClick={setVegetarianPizzasSort}>Вегетарианские</button>
                    <button onClick={setGrillPizzasSort}>Гриль</button>
                    <button onClick={setSpicyPizzasSort}>Острые</button>
                </ButtonsPizzaSort>
                <div>
                    Сортировка по:
                    <PizzaSortSelect>
                        <option>популярности</option>
                        <option>цене</option>
                        <option>алфавиту</option>
                    </PizzaSortSelect>
                </div>

            </PizzasSortContainer>
            <PizzasList pizzaType={type}/>
        </div>
    );
};

export default PizzasListSort;
