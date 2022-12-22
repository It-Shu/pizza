import React from 'react';
import './App.css';
import Header from './components/navbar/Header';
import PizzasListSort from "./components/sort/PizzasListSort";
import Basket from "./components/basket/Basket";
import EmptyBasket from "./components/basket/EmptyBasket";

function App() {

    return (
        <div>
            <Header/>
            <PizzasListSort/>
            <Basket/>
            <EmptyBasket/>
        </div>
    );
}


export default App;
