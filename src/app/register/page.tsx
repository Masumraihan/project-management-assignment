"use client";

import { Button, Form, Input, Typography } from "antd";
//import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/styles/register.module.css";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import CForm from "@/components/form/CForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CInput from "@/components/form/CInput";

const { Text, Title, Link } = Typography;

const registerFormResolver = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const RegisterPage = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title className={styles.title}>Sign up</Title>
          <Text className={styles.text}>Join us! Create an account to get started.</Text>
        </div>
        <CForm onsubmit={onFinish} resolver={zodResolver(registerFormResolver)}>
          <CInput
            prefix={<UserOutlined />}
            name='name'
            label='Name'
            id='name'
            type='text'
            placeholder='Name'
          />

          <CInput
            prefix={<MailOutlined />}
            name='email'
            label='Email'
            id='email'
            type='email'
            placeholder='Email'
          />
          <CInput
            prefix={<LockOutlined />}
            name='password'
            label='Password'
            type='password'
            id='password'
          />
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type='primary' htmlType='submit'>
              Sign up
            </Button>
            <div className={styles.signup}>
              <Text className={styles.text}>Already have an account?</Text>{" "}
              <Link href='/login'>Sign in</Link>
            </div>
          </Form.Item>
        </CForm>
      </div>
    </section>
  );
};
export default RegisterPage;
