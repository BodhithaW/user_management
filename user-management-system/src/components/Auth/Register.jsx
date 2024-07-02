import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { registerUser } from '../../services/authService';
import { UserContext } from '../../context/UserContext';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { addUser } = useContext(UserContext);

    //Function to handle from submission
    const onFinish = (values) => {
        const { username, password, email, firstname, mobile } = values;
        const newUser = { username, password, email, firstname, mobile, role: 'user' };
        const registeredUser = registerUser(newUser); // Call registerUser function to register the user

        if (registeredUser) {
            addUser(registeredUser);
            setSuccess('Registration successful! You can now log in.');
            navigate('/');
        } else {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: 'auto', padding: '50px 0' }}>
            <h2 style={{ textAlign: 'center' }}>Register</h2>
            {error && <Alert message={error} type="error" showIcon />}
            {success && <Alert message={success} type="success" showIcon />}
            <Form
                name="register"
                className="register-form"
                onFinish={onFinish}
            >
                <Form.Item
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your First Name!' },
                        { pattern: /^[A-Za-z]+$/, message: 'First Name must contain only letters!' }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' },
                        { type: 'email', message: 'The input is not valid E-mail!' }
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="mobile"
                    rules={[{ required: true, message: 'Please input your Mobile Number!' },
                        { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number!' }
                    ]}
                >
                    <Input prefix={<PhoneOutlined  className="site-form-item-icon" />} placeholder="Mobile Number" />
                </Form.Item>

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
