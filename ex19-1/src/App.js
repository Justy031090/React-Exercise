import React, { useState, useEffect } from 'react';
import starWarsAPI from './api/starWars';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const myData = await starWarsAPI.get('/films/1');
            console.log(myData);
            setData([myData.data]);
        };
        getData();
    }, []);
    if (!data.length) return <div></div>;
    return (
        <div>
            {data.length &&
                data.map((el) => {
                    return (
                        <div key={el.release_date}>
                            <h2>{el.title}</h2>
                            <span>Directed by {el.director}</span>
                        </div>
                    );
                })}
        </div>
    );
}
export default App;
