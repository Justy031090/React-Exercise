import React, { useState } from 'react';
import Todos from './components/Todos';
import TodosForm from './components/TodosForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const initialData = [
        { id: 1, name: 'CSS', completed: true },
        { id: 2, name: 'JavaScript', completed: true },
        { id: 3, name: 'Learn React', completed: false },
        { id: 4, name: 'Learn mongoDB', completed: false },
        { id: 5, name: 'Learn Node JS', completed: false },
    ];
    const [todos, setTodos] = useState(initialData);
    const addTask = (userInput) => {
        if (userInput) {
            const newTask = {
                id: uuidv4(),
                name: userInput,
                complete: false,
            };
            setTodos([...todos, newTask]);
        }
    };
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    };
    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id
                    ? { ...todo, complete: !todo.complete }
                    : { ...todo }
            ),
        ]);
    };
    return (
        <div className="App">
            <h1>ToDo list: {todos.length}</h1>
            <TodosForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <Todos
                        key={todo.id}
                        todo={todo}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                );
            })}
        </div>
    );
}

export default App;
