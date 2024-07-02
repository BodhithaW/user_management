import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const initialUsers = [
    { id: 1, username: 'admin', password: 'admin123', email: 'admin@example.com', mobile: '0778976567', role: 'admin', firstname: 'Adam' },
    { id: 2, username: 'user', password: 'user123', email: 'user@example.com', mobile: '0728996567', role: 'user', firstname: 'Sampa' },
];

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(initialUsers);

    const addUser = (user) => {
        setUsers([...users, { ...user, id: users.length + 1 }]);
    };

    const updateUser = (updatedUser) => {
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
