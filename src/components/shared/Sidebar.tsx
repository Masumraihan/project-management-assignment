"use client";
import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <AppstoreOutlined />, label: <Link href={"/"}>Tasks</Link> },
];

const Sidebar = () => {
  return (
    <div className='w-full min-h-screen h-full flex items-end bg-white'>
      <Menu
        className='h-[calc(100%-52px)]'
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        items={items}
      />
    </div>
  );
};

export default Sidebar;
