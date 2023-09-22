import React from 'react';
import './Dice.css';

function Dice({ value, rolling }) {
    return (
        <div className={`dice ${rolling ? 'rolling' : ''}`}>
            {(value === 1 || value === 3 || value === 5) && <div className="dice-dot active dot-1"></div>}
            
            {(value === 2 || value === 3 || value > 3) && <div className="dice-dot active dot-2"></div>}
            
            {(value > 3) && <div className="dice-dot active dot-3"></div>}
            
            {(value > 3) && <div className="dice-dot active dot-4"></div>}
            
            {(value === 2 || value === 3 || value > 3) && <div className="dice-dot active dot-5"></div>}
            
            {(value === 6) && <div className="dice-dot active dot-6"></div>}
            
            {(value === 6) && <div className="dice-dot active dot-7"></div>}
        </div>
    );
}

export default Dice;
