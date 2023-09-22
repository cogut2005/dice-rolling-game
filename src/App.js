import React, { useState } from 'react';
import Dice from './Dice';
import './App.css';

function App() {
    const [numDices, setNumDices] = useState(1);
    const [diceValues, setDiceValues] = useState([]);
    const [rolling, setRolling] = useState(false);

    const rollDices = () => {
        setRolling(true);
        const values = Array.from({ length: numDices }, () => Math.floor(Math.random() * 6) + 1);
        setTimeout(() => {
            setDiceValues(values);
            setRolling(false);
        }, 700);
    };

    return (
        <div className="App">
            <h1>Dice Rolling Game</h1>
            <select value={numDices} onChange={e => setNumDices(Number(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
            <button onClick={rollDices}>Roll</button>
            <div>
                {diceValues.map((value, idx) => (
                    <Dice key={idx} value={value} rolling={rolling} />
                ))}
            </div>
            <div className="footer">
              Coded by Cinar Ogut
            </div>
        </div>
    );
}

export default App;
