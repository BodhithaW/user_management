// import React, { useEffect } from 'react';
// import { Form, Input, Modal, notification } from 'antd';
// import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
//
// const UserForm = ({ visible, onCreate, onCancel, initialData }) => {
//     const [form] = Form.useForm();
//
//     useEffect(() => {
//         if (initialData) {
//             form.setFieldsValue(initialData);
//         }
//     }, [initialData, form]);
//
//     const handleOk = () => {
//         form
//             .validateFields()
//             .then((values) => {
//                 form.resetFields();
//                 onCreate({ ...initialData, ...values });
//                 // Display a success notification
//                 notification.success({
//                     message: 'Success',
//                     description: 'User information updated successfully!',
//                 });
//             })
//             .catch((info) => {
//                 console.log('Validate Failed:', info); // Log validation errors
//             });
//     };
//
//     return (
//         <Modal
//             visible={visible}
//             title="Edit User"
//             okText="Update"
//             onCancel={onCancel}
//             onOk={handleOk}
//         >
//             <Form
//                 form={form}
//                 layout="vertical"
//                 name="user_form"
//                 initialValues={initialData}
//             >
//                 <Form.Item
//                     name="firstname"
//                     label="First Name"
//                     rules={[{ required: true, message: 'Please input your First Name!' }]}
//                 >
//                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
//                 </Form.Item>
//
//                 <Form.Item
//                     name="email"
//                     label="Email"
//                     rules={[{ required: true, message: 'Please input your Email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
//                 >
//                     <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
//                 </Form.Item>
//
//                 <Form.Item
//                     name="mobile"
//                     label="Mobile Number"
//                     rules={[{ required: true, message: 'Please input your Mobile Number!' }, { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number!' }]}
//                 >
//                     <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Mobile Number" />
//                 </Form.Item>
//
//                 <Form.Item
//                     name="username"
//                     label="Username"
//                     rules={[{ required: true, message: 'Please input your Username!' }]}
//                 >
//                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//                 </Form.Item>
//
//                 <Form.Item
//                     name="password"
//                     label="Password"
//                     rules={[{ required: true, message: 'Please input your Password!' }]}
//                 >
//                     <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
//                 </Form.Item>
//             </Form>
//         </Modal>
//     );
// };
//
// export default UserForm;

import React, { useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const UserForm = ({ visible, onCreate, onCancel, initialData }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialData) {
            form.setFieldsValue(initialData);
        } else {
            form.resetFields();
        }
    }, [initialData, form]);

    return (
        <Modal
            visible={visible}
            title={initialData ? 'Edit User' : 'Add User'}
            okText={initialData ? 'Update' : 'Add'}
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate({ ...initialData, ...values });
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form form={form} layout="vertical" name="userForm">
                <Form.Item
                    name="firstname"
                    label="First Name"
                    rules={[{ required: true, message: 'Please input the first name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Please input the username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="mobile"
                    label="Mobile Number"
                    rules={[{ required: true, message: 'Please input the mobile number!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please input the email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="role"
                    label="Role"
                    rules={[{ required: true, message: 'Please select the role!' }]}
                >
                    <Select>
                        <Option value="admin">Admin</Option>
                        <Option value="user">User</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserForm;
