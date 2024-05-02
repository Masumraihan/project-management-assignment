import { Button, Flex } from "antd";
import Link from "next/link";
import MobileMenuSidebar from "./MobileMenuSidebar";

const Header = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      style={{ padding: "10px", width: "100%", backgroundColor: "white" }}
    >
      <div className='sm:hidden'>
        <MobileMenuSidebar />
      </div>
      <h1 className='hidden sm:block sm:text-2xl font-bold'>Project Management Dashboard</h1>
      <Button type='primary'>
        <Link href={"/login"}>Login</Link>
      </Button>
    </Flex>
  );
};

export default Header;
