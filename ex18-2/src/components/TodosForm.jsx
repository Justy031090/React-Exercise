import React from 'react';
import { useState } from 'react';
function TodosForm({ addTask }) {
    const [userInput, setUserInput] = useState('');
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Add task"
            />
            <button>Save Changes</button>
        </form>
    );
}

export default TodosForm;
