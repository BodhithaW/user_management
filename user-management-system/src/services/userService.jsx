let users = [
    { id: 1, firstname: 'Adam', username: 'admin', email: 'admin@example.com',mobile: '0778976567', role: 'admin' },
    { id: 2, firstname: 'Sampa', username: 'user', email: 'user@example.com',mobile: '0728996567', role: 'user' }
];

export const getUsers = () => users;

export const createUser = (user) => {
    users.push({ ...user, id: users.length + 1 });
    return users;
};

export const updateUser = (id, updatedUser) => {
    users = users.map(user => user.id === id ? { ...user, ...updatedUser } : user);
    return users;
};

export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    return users;
};

export const registerUser = (newUser) => {
    const userExists = users.some(user => user.username === newUser.username || user.email === newUser.email || user.mobile === newUser.mobile);
    if (userExists) return null;
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
};


