import React from 'react';
import './App.css';
import Header from './components/navbar/Header';
import PizzasList from "./components/pizza_list/PizzasList";
import PizzasListSort from "./components/sort/PizzasListSort";
import Basket from "./components/basket/Basket";
import EmptyBasket from "./components/basket/EmptyBasket";

function App() {

    return (
        <div className="App">
            <Header/>
            <PizzasListSort/>
            <PizzasList/>
            <Basket/>
            <EmptyBasket/>
        </div>
    );
}


export default App;
