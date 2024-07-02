// import React, { useContext, useState } from 'react';
// import { Table, Button, Modal, Typography, Space,notification } from 'antd';
// import { UserContext } from '../../context/UserContext';
// import { AuthContext } from '../../context/AuthContext';
// import UserForm from './UserForm';
// import './Dashboard.css';
// import { DeleteTwoTone, EditTwoTone, LogoutOutlined } from '@ant-design/icons';
//
// const { Text } = Typography;
//
// const Dashboard = () => {
//     const { users, updateUser, deleteUser } = useContext(UserContext);
//     const { user, logout } = useContext(AuthContext);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//
//     // Function to handle user edit action
//     const handleEdit = (user) => {
//         setSelectedUser(user);
//         setIsModalVisible(true);
//     };
//
//     // Function to handle user delete action
//     const handleDelete = (id) => {
//         Modal.confirm({
//             title: 'Are you sure you want to delete this user?',
//             onOk: () => {
//                 deleteUser(id); //Delete the user
//                 notification.success({
//                     message: 'User Deleted',
//                     description: 'The user has been successfully deleted.', // Show success notification
//
//                 });
//             },
//         });
//     };
//
//     // Function to handle logout action
//     const handleLogout = () => {
//         logout();
//     };
//
//     //table columns
//     const columns = [
//         {
//             title: 'Username',
//             dataIndex: 'username',
//             key: 'username',
//         },
//         {
//             title: 'First Name',
//             dataIndex: 'firstname',
//             key: 'firstname',
//         },
//         {
//             title: 'Mobile Number',
//             dataIndex: 'mobile',
//             key: 'mobile',
//         },
//         {
//             title: 'Email',
//             dataIndex: 'email',
//             key: 'email',
//         },
//         {
//             title: 'Role',
//             dataIndex: 'role',
//             key: 'role',
//         },
//     ];
//
//     // Add action buttons for admin users
//     if (user.role === 'admin') {
//         columns.push({
//             title: 'Actions',
//             key: 'actions',
//             render: (text, record) => (
//                 <Space size="middle">
//                     <EditTwoTone onClick={() => handleEdit(record)} />
//                     <DeleteTwoTone twoToneColor="#eb2f96" onClick={() => handleDelete(record.id)} />
//                 </Space>
//             ),
//         });
//     }
//
//     return (
//         <div>
//             <h2 style={{ marginLeft: 650 }}>Dashboard</h2>
//             <Button
//                 className="btn1"
//                 type="primary"
//                 danger
//                 onClick={handleLogout}
//                 style={{ marginLeft: '90%', marginTop: 10 }}
//             >
//                 Logout
//                 <LogoutOutlined />
//             </Button>
//             <div style={{ marginBottom: 16, marginLeft: 140 }}>
//                 <Text>
//                     Welcome, <Text strong>{user.firstname}</Text>!
//                 </Text>
//             </div>
//             <Table
//                 columns={columns}
//                 dataSource={users}
//                 rowKey="id"
//                 style={{ width: '80%', margin: '0 auto' }}
//             />
//             {isModalVisible && (
//                 <UserForm
//                     visible={isModalVisible}
//                     onCreate={(user) => {
//                         if (selectedUser) {
//                             updateUser(user);
//                         }
//                         setIsModalVisible(false);
//                     }}
//                     onCancel={() => {
//                         setIsModalVisible(false);
//                         setSelectedUser(null);
//                     }}
//                     initialData={selectedUser} // Pass the initial data of the selected user to the form
//                 />
//             )}
//         </div>
//     );
// };
//
// export default Dashboard;

import React, { useContext, useState } from 'react';
import { Table, Button, Modal, Typography, Space, notification } from 'antd';
import { UserContext } from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';
import UserForm from './UserForm';
import { DeleteTwoTone, EditTwoTone, LogoutOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Dashboard = () => {
    const { users, updateUser, deleteUser } = useContext(UserContext);
    const { user, logout } = useContext(AuthContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this user?',
            onOk: () => {
                deleteUser(id);
                notification.success({
                    message: 'User Deleted',
                    description: 'The user has been successfully deleted.',
                });
            },
        });
    };

    const handleLogout = () => {
        logout();
    };

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'firstname',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
    ];

    if (user.role === 'admin') {
        columns.push({
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <EditTwoTone onClick={() => handleEdit(record)} />
                    <DeleteTwoTone twoToneColor="#eb2f96" onClick={() => handleDelete(record.id)} />
                </Space>
            ),
        });
    }

    return (
        <div>
            <h2 style={{ marginLeft: 650 }}>Dashboard</h2>
            <Button
                className="btn1"
                type="primary"
                danger
                onClick={handleLogout}
                style={{ marginLeft: '90%', marginTop: 10 }}
            >
                Logout
                <LogoutOutlined />
            </Button>
            <div style={{ marginBottom: 16, marginLeft: 140 }}>
                <Text>
                    Welcome, <Text strong>{user.firstname}</Text>!
                </Text>
            </div>
            <Table
                columns={columns}
                dataSource={users}
                rowKey="id"
                style={{ width: '80%', margin: '0 auto' }}
            />
            {isModalVisible && (
                <UserForm
                    visible={isModalVisible}
                    onCreate={(user) => {
                        if (selectedUser) {
                            updateUser(user);
                        }
                        setIsModalVisible(false);
                    }}
                    onCancel={() => {
                        setIsModalVisible(false);
                        setSelectedUser(null);
                    }}
                    initialData={selectedUser}
                />
            )}
        </div>
    );
};

export default Dashboard;
