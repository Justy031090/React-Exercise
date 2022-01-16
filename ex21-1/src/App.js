import Button from './components/Button';
import { useState } from 'react';
const App = () => {
    const [display, setDisplay] = useState(false);
    const showHide = () => {
        setDisplay(!display);
    };
    return (
        <div className="App">
            <button onClick={() => showHide()}>
                {display ? 'save' : 'edit'}
            </button>
            {display && <Button />}
        </div>
    );
};
export default App;
