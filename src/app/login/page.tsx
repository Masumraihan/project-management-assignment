"use client";
import styles from "@/styles/login.module.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";

const { Text, Title, Link } = Typography;

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    // Implement your login logic here, potentially using an API route
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title className={styles.title}>Sign in</Title>
          <Text className={styles.text}>
            Welcome back to AntBlocks UI! Please enter your details below to sign in.
          </Text>
        </div>
        <Form
          name='normal_login'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout='vertical'
          requiredMark='optional'
        >
          <Form.Item
            name='email'
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className={styles.forgotPassword} href='/'>
              Forgot password?
            </Link>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block={true} type='primary' htmlType='submit'>
              Log in
            </Button>
            <div className={styles.footer}>
              <Text className={styles.text}>Don&apos;t have an account?</Text>{" "}
              <Link href='/register'>Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};
export default LoginPage;
