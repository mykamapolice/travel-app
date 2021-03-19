import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface Values {
  username: string;
  password: string;
}

interface ModalFormProps {
  visible: boolean;
  isSignIn: boolean;
  onCancel: () => void;
  onSubmitLogin: (values: Values) => void;
  onSubmitRegistration: (values: Values) => void;
  selectAuthType: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  visible,
  isSignIn,
  onCancel,
  onSubmitLogin,
  onSubmitRegistration,
  selectAuthType,
}) => {
  const serverMessage = useSelector(
    (state: any) => state.userReducer.serverMessage
  );

  const signType = useMemo(() => (isSignIn ? 'Sign In' : 'Sign Up'), [
    isSignIn,
  ]);

  const [form] = Form.useForm();

  const validateFormHandler = useCallback(() => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();

        if (isSignIn) {
          onSubmitLogin(values);
        } else {
          onSubmitRegistration(values);
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }, [form, isSignIn, onSubmitLogin, onSubmitRegistration]);

  return (
    <Modal
      visible={visible}
      title={signType}
      okText={signType}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={validateFormHandler}
    >
      <h2>{serverMessage}</h2>
      <Form form={form} layout="vertical" name="form_in_modal">
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

        {!isSignIn && (
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm password"
            />
          </Form.Item>
        )}

        <Button type="link" onClick={selectAuthType}>
          {!isSignIn ? 'Sign In' : 'Sign Up'}
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalForm;
