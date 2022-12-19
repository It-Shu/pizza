import React, {ChangeEvent, MouseEvent, useState} from 'react';

interface pizzaListType {
    id: number,
    name: string,
    price: number,
}

const   PizzasList = () => {

    const [newPizzaName, setNewPizzaName] = useState('')

    const pizzaList: pizzaListType[] = [
        {id: 1, name: 'pepperoni', price: 35},
        {id: 2, name: 'tripleCheese', price: 25},
        {id: 3, name: 'margarita', price: 15},
    ]

    const addNewPizza = (e: MouseEvent<HTMLElement>) => {

        const newPizza = {id: 4, name: newPizzaName, price: 45};
        if (e.currentTarget) {
            return [...pizzaList, newPizza]
        }

    }

    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        const newPizzaName = e.currentTarget.value
        setNewPizzaName(newPizzaName)
    }
    console.log(newPizzaName)
    return (
        <div>
            {/*<div>*/}
            {/*    <input type="text" onChange={onChangeInput}/>*/}
            {/*    <button onClick={addNewPizza}>add pizza</button>*/}
            {/*</div>*/}
            {
                pizzaList.map((p) => <div key={p.id}>
                    <div>{p.name}</div>
                    <div>{p.price}</div>

                </div>)
            }
        </div>
    );
};

export default PizzasList;
