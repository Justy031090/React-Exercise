import React, { useState } from 'react';
import MyText from './components/MyText';
function App() {
    const [maxLength, setMaxLength] = useState(10);
    const [text, setText] = useState('THIS IS MY NEW STATE');
    return (
        <div className="App">
            <MyText text={text} maxLength={maxLength} />
        </div>
    );
}

export default App;
