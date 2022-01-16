import React, { useEffect, useRef } from 'react';

function Button({ disp }) {
    const inputEl = useRef(null);
    useEffect(() => {
        inputEl.current.focus();
    }, []);
    return (
        <div>
            <input type="text" ref={inputEl} />
        </div>
    );
}

export default Button;
