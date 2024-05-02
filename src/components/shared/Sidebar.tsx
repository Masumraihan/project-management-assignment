"use client";
import { AppstoreOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <AppstoreOutlined />, label: <Link href={"/"}>Projects</Link> },
  { key: "1", icon: <QuestionCircleOutlined />, label: <Link href={"/tasks"}>Tasks</Link> },
];

const Sidebar = () => {
  return (
    <div className='w-full min-h-screen h-full flex items-end bg-white'>
      <Menu
        className='h-[calc(100%-52px)] space-y-3'
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        items={items}
      />
    </div>
  );
};

export default Sidebar;
