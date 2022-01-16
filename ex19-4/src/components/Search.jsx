import { useState } from 'react';

function Search({ getTerm }) {
    const [term, setTerm] = useState('');
    const handleChange = (e) => {
        setTerm(e.target.value);
        getTerm(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={handleChange} value={term} />
        </div>
    );
}

export default Search;
