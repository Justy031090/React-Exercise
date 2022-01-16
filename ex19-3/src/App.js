import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('hooks');
    const [search, setSearch] = useState('hooks');
    const [loading, isLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    useEffect(() => {
        const getData = async () => {
            isLoading(true);
            try {
                const res = await axios.get(
                    `https://hn.algolia.com/api/v1/search?query=${search}`
                );
                setErrorMsg(null);
                setData(res.data.hits);
                isLoading(false);
            } catch (e) {
                setErrorMsg(e.message);
            }
        };
        getData();
    }, [search]);

    return (
        <div>
            {loading && <div>loading...</div>}
            {errorMsg && <div>{errorMsg}</div>}
            <input
                type="text"
                onChange={(e) => setQuery((query) => e.target.value)}
                onKeyDown={(e) =>
                    e.key === 'Enter' ? setSearch(query) : search
                }
            />
            <button onClick={() => setSearch(query)}>Search </button>
            {data.length &&
                data.map((el, i) => {
                    return (
                        <div key={i}>
                            <a href={el.url}>
                                <span>{el.title}</span>
                            </a>
                        </div>
                    );
                })}
        </div>
    );
}
export default App;
