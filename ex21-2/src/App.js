import { useRef } from 'react';
import './app.css';

const App = () => {
    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        vidRef.current.play();
    };
    const handlePauseVideo = () => {
        vidRef.current.pause();
        console.log(vidRef);
    };
    return (
        <div className="App">
            <video
                ref={vidRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video.mp4"
                width={600}
                height={600}
            ></video>
            <div>
                <button
                    onClick={() => {
                        handlePlayVideo();
                    }}
                >
                    Play
                </button>
                <button
                    onClick={() => {
                        handlePauseVideo();
                    }}
                >
                    Pause
                </button>
            </div>
        </div>
    );
};
export default App;
