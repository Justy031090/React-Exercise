import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Show from './Show';
import Search from './Search';

function Avatars() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get(
                'https://randomuser.me/api/?results=10'
            );
            setUsers(res.data.results);
        };
        if (!users.length) {
            getUsers();
        }
    }, [users]);
    const getTerm = (input) => {
        setSearch(input);
    };
    const filter = users.filter((avatar) => {
        return (
            avatar.name.first.toLowerCase().includes(search.toLowerCase()) ||
            avatar.name.last.toLowerCase().includes(search.toLowerCase())
        );
    });
    return (
        <div>
            <Search getTerm={getTerm} />
            <Show avatar={filter} />
        </div>
    );
}

export default Avatars;
