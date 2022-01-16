import React, { useState } from 'react';
function App() {
    const array = ['one', 'two', 'three', 'four', 'five'];
    const [selected, isSelected] = useState([]);
    const [active, isActive] = useState(array);
    const handleSelected = (e, item) => {
        if (e) {
            isSelected(selected.filter((el) => el !== e));
        } else {
            item = [...selected, item];
            isSelected(item);
        }
    };
    const deleteItems = () => {
        isActive(
            active.filter((el) => {
                return !selected.includes(el);
            })
        );
    };
    const resetItems = () => {
        isSelected([]);
        isActive(array);
    };
    return (
        <div>
            <div>
                <button onClick={deleteItems}>Delete</button>
                <button onClick={resetItems}>Reset</button>
            </div>
            <div>
                {active.map((el, i) => {
                    return (
                        <li key={i}>
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    handleSelected(e.target.checked, selected)
                                }
                                checked={selected.includes(el)}
                            />
                            {el}
                        </li>
                    );
                })}
            </div>
        </div>
    );
}
export default App;
