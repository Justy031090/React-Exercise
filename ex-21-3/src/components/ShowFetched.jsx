import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowFetched() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const source = axios.CancelToken.source();
        const getUsers = async () => {
            try {
                const res = await axios.get(
                    'https://randomuser.me/api/?results=10',
                    { cancelToken: source.token }
                );
                setUsers(res.data.results[0].name.first);
            } catch (e) {
                console.log(e.message);
            }
        };
        if (!users.length) {
            getUsers();
        }
        return () => {
            source.cancel('Fetching was stopped ');
        };
    }, [users]);
    return <div>{users}</div>;
}

export default ShowFetched;
