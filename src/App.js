import React, { useState } from 'react';
import Dice from './Dice';
import './App.css';

function App() {
    const [diceValues, setDiceValues] = useState([]);
    const [numDices, setNumDices] = useState(1);
    const [rolling, setRolling] = useState(false);

    const rollDices = () => {
        const initialDiceValues = Array.from({ length: numDices }, () => 1);
        setDiceValues(initialDiceValues);

        // Start the rolling animation
        setRolling(true);

        // Generate new random dice values after the animation duration
        setTimeout(() => {
            const newDiceValues = Array.from({ length: numDices }, () => Math.floor(Math.random() * 6) + 1);
            setDiceValues(newDiceValues);
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
              Coded by Cinar OGUT
            </div>
        </div>
    );
}

export default App;
