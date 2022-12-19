import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import PizzasList from "./components/pizza_list/PizzasList";
import PizzasListSort from "./components/sort/PizzasListSort";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <PizzasListSort/>
            <PizzasList/>
        </div>
    );
}


export default App;
