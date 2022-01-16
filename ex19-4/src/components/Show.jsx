import React from 'react';

function Show({ avatar }) {
    return (
        <div>
            {avatar.map((el, i) => (
                <div key={i} className="avatar-container">
                    {el.name.first} {el.name.last}
                    <img src={el.picture.large} alt="Avatar not found" />
                </div>
            ))}
        </div>
    );
}

export default Show;
