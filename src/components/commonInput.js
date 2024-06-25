import React, {useEffect } from "react";
import { Form, Input, Button } from 'antd';

const InputHandler = ({ onSubmit, editUser, onUpdate }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editUser) {
      form.setFieldsValue(editUser);
    } else {
      form.resetFields();
    }
  }, [editUser, form]);

  const handleSubmit = (values) => {
    if (editUser) {
      onUpdate({ ...editUser, ...values });
    } else {
      onSubmit(values);
    }
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      className="header-box"
      layout="inline"
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'The input is not valid E-mail!' }
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {editUser ? "Update" : "Add user"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputHandler;
