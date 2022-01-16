import React, { useState, useEffect } from 'react';
import countriesAPI from './api/countriesAPI';

function App() {
    const [country, setCountry] = useState([]);
    const [term, setTerm] = useState('');
    useEffect(() => {
        const getCountries = async () => {
            const countries = await countriesAPI.get('/v2/all');
            setCountry(countries.data);
        };
        getCountries();
    });
    return (
        <div>
            <input type="text" onChange={(e) => setTerm(e.target.value)} />
            {country
                .filter((el) => {
                    if (term === '') return el;
                    else if (el.name.toLowerCase().includes(term.toLowerCase()))
                        return el.name;
                })
                .map((el, i) => {
                    return <div key={el.alpha2Code}>{el.name}</div>;
                })}
        </div>
    );
}
export default App;
