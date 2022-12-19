import React from 'react';
import {ButtonsPizzaSort, PizzaSortSelect, PizzasSortContainer} from "./pizzasSort.style";

const PizzasListSort = () => {

    return (
        <div>

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
