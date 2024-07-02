import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const UserList = () => {
    const { users, removeUser } = useContext(UserContext);

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.firstname} {user.username}  ({user.email}) - {user.role}
                        <button onClick={() => removeUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
