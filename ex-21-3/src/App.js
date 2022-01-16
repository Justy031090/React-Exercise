import React, { useRef, useState } from 'react';
import './app.css';

function App() {
    const sources = {
        imgOneBlack: require('./assets/noviy-god-ConvertImage.jpg'),
        imgTwoBlack: require('./assets/winterus1-ConvertImage.jpg'),
        imgOneColor: require('./assets/noviy-god.jpg'),
        imgTwoColor: require('./assets/winterus1.jpg'),
    };
    const firstImage = useRef(null);
    const secondImage = useRef(null);

    // const [sourceOne, setSourceOne] = useState(sources.imgOneBlack);
    // const [sourceTwo, setSourceTwo] = useState(sources.imgTwoBlack);
    const handleMouseOverOne = () => {
        firstImage.current.src = sources.imgOneColor;
        // setSourceOne(sources.imgOneColor);
    };
    const handleMouseOverTwo = () => {
        secondImage.current.src = sources.imgTwoColor;
        // setSourceTwo(sources.imgTwoColor);
    };
    const handleMouseLeaveOne = () => {
        // setSourceOne(sources.imgOneBlack);
        firstImage.current.src = sources.imgOneBlack;
    };
    const handleMouseLeaveTwo = () => {
        // setSourceTwo(sources.imgTwoBlack);
        secondImage.current.src = sources.imgTwoBlack;
    };
    return (
        <div className="App">
            <div className="imageOne">
                <img
                    ref={firstImage}
                    onMouseLeave={() => handleMouseLeaveOne()}
                    onMouseOver={() => handleMouseOverOne()}
                    src={sources.imgOneBlack}
                    alt="Not found"
                />
            </div>
            <div className="imageTwo">
                <img
                    ref={secondImage}
                    src={sources.imgTwoBlack}
                    alt="Not found"
                    onMouseOver={() => handleMouseOverTwo()}
                    onMouseLeave={() => handleMouseLeaveTwo()}
                />
            </div>
        </div>
    );
}

export default App;
