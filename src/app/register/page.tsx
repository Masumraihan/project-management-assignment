"use client";

import { register } from "@/actions/register";
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import styles from "@/styles/common.module.css";
import { HomeOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const { Text, Title, Link } = Typography;

const registerFormResolver = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  address: z.string({ required_error: "Address is required" }),
  password: z.string({ required_error: "Password is required" }),
});

export type TRegisterFields = z.infer<typeof registerFormResolver>;

const RegisterPage = () => {
  const router = useRouter();
  const onFinish = async (data: TRegisterFields) => {
    const res = await register(data);
    if (res?.success) {
      toast.success(res.message);
      router.push("/login");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <Title className={styles.title}>Sign Up</Title>
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
            prefix={<HomeOutlined />}
            type='text'
            name='address'
            label='Address'
            id='address'
            placeholder='Address'
          />
          <CInput
            prefix={<LockOutlined />}
            name='password'
            label='Password'
            type='password'
            id='password'
            placeholder='Password'
          />
          <>
            <Button block type='primary' htmlType='submit'>
              Sign up
            </Button>
            <div className={styles.footer}>
              <Text className={styles.text}>Already have an account?</Text>{" "}
              <Link href='/login'>Sign in</Link>
            </div>
          </>
        </CForm>
      </div>
    </section>
  );
};
export default RegisterPage;
