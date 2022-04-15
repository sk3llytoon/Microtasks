import React from 'react';
import './App.css';
import {Cars} from "./MethodMad/Cars";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <Cars topCars={topCars}/>
        </div>
    )
}

export default App;
