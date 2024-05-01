import { Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      style={{ padding: "10px", width: "100%", backgroundColor: "white" }}
    >
      <Title level={3} style={{ backgroundColor: "white", marginBottom: 0 }}>
        Project Management Dashboard
      </Title>
      <Button type='primary'>
        <Link href={"/login"}>Login</Link>
      </Button>
    </Flex>
  );
};

export default Header;
