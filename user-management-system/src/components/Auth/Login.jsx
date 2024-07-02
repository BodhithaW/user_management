import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { Form, Input, Button, Checkbox, Alert,notification,Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const { users } = useContext(UserContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        const { username, password } = values; // Extract username and password from form values
        const user = users.find(u => u.username === username && u.password === password); // Find user matching the credentials
        if (user) {
            login(user);
            notification.success({
                message: 'Login Successful',
                description: `Welcome back, ${user.firstname}!`,
            });
            navigate('/dashboard'); // Redirect to dashboard
        } else {
            setError('Invalid username or password'); // Show error message if credentials are invalid
        }
    };

    return (
        <Card
              bordered={true}
              style={{
                  width: 500,
                  marginLeft: 500,
                  marginTop:100,
              }}>
        <div style={{ maxWidth: '300px', margin: 'auto', padding: '50px 0' }}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            {error && <Alert message={error} type="error" showIcon />}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="#">
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                     Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
        </div>
        </Card>
    );
};

export default Login;
