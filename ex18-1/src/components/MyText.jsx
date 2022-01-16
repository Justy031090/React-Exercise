import React, { useState } from 'react';

function MyText({ maxLength, text, handleParams }) {
    const [hidden, setHidden] = useState(true);
    const myString = hidden ? text.slice(0, maxLength) : text;
    const buttonHandle = () => {
        setHidden(!hidden);
    };

    return (
        <div>
            <div>{myString}</div>
            <button onClick={() => buttonHandle()}>
                {hidden ? 'Show more...' : 'Show less'}
            </button>
        </div>
    );
}

export default MyText;

// If the text is longer that the maximum length hide the
// remaining text.
// You are able to read the rest of the text by clicking on read
// more and you are able to hide the text by clicking on show
// less.
// Use the useState hook to control when it is hidden.
