import React, { useState } from 'react';
import './App.css';

function App() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const convertSec = (e) => {
        setSec(e.target.value);
        setMin(e.target.value / 60);
        setHour(e.target.value / 60 / 60);
    };
    const convertMin = (e) => {
        setSec(e.target.value * 60);
        setMin(e.target.value);
        setHour(e.target.value / 60);
    };
    const convertHours = (e) => {
        setSec(e.target.value * 60 * 60);
        setMin(e.target.value * 60);
        setHour(e.target.value);
    };
    return (
        <div className="App">
            <div>
                Seconds
                <input
                    type="number"
                    onChange={(e) => convertSec(e)}
                    value={sec}
                />
            </div>
            <div>
                {' '}
                Minutes
                <input
                    type="number"
                    onChange={(e) => convertMin(e)}
                    value={min}
                />
            </div>
            <div>
                Hours
                <input
                    type="number"
                    onChange={(e) => convertHours(e)}
                    value={hour}
                />
            </div>
        </div>
    );
}

export default App;
