import { useState } from 'react';
import ShowFetched from './components/ShowFetched';
const App = () => {
    const [display, setDisplay] = useState(false);
    const [buttonText, setButtonText] = useState(false);
    const handleToggle = () => {
        setButtonText(!buttonText);
        setDisplay(!display);
    };
    return (
        <div className="App">
            <button onClick={() => handleToggle()}>
                {buttonText ? 'hide' : 'show'}
            </button>
            {display && <ShowFetched />}
        </div>
    );
};
export default App;
