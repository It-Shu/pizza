import React from 'react';
import rectangle from '../../assets/Rectangle 2.png'
import {ButtonsPizzaSort, PizzaSortSelect, Rectangle, PizzasSortContainer} from "./pizzasSort.style";

const PizzasListSort = () => {


    return (
        <div>
            <Rectangle>
                <img src={rectangle} alt="rectangle"/>
            </Rectangle>
            <PizzasSortContainer>
                <ButtonsPizzaSort>
                    <button>Все</button>
                    <button>Мясные</button>
                    <button>Вегетарианские</button>
                    <button>Гриль</button>
                    <button>Острые</button>
                    <button>Закрытые</button>
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

        </div>
    );
};

export default PizzasListSort;
