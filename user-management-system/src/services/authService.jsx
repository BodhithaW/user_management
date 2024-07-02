let users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', firstname: 'Adam', mobile: '0778976567', email: 'admin@example.com' },
    { id: 2, username: 'user', password: 'user123', role: 'user', firstname: 'Sampa', mobile: '0728996567', email: 'user@example.com' },
];

export const login = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? { ...user, isAuthenticated: true } : { isAuthenticated: false };
};

export const registerUser = (newUser) => {
    const userExists = users.some(user => user.username === newUser.username || user.email === newUser.email || user.mobile === newUser.mobile);
    if (userExists) return null;
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
};
