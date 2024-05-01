"use client";
import { login } from "@/actions/login";
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import styles from "@/styles/common.module.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Form, Typography } from "antd";
import { z } from "zod";

const { Text, Title, Link } = Typography;

const loginFormResolver = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string({ required_error: "Password is required" }),
});

export type TLoginFields = z.infer<typeof loginFormResolver>;

const LoginPage = () => {
  const onSubmit = async (data: TLoginFields) => {
    const res = await login(data);
  };

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <Title className={styles.title}>Sign in</Title>
          <Text className={styles.text}>
            Welcome back! Please enter your details below to sign in.
          </Text>
        </div>
        <CForm onsubmit={onSubmit} resolver={zodResolver(loginFormResolver)}>
          <CInput
            prefix={<MailOutlined />}
            type='email'
            placeholder='Email'
            name='email'
            label='Email'
            id='email'
          />
          <CInput
            prefix={<LockOutlined />}
            type='password'
            placeholder='Password'
            name='password'
            label='Password'
            id='password'
          />
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
        </CForm>
      </div>
    </section>
  );
};
export default LoginPage;
