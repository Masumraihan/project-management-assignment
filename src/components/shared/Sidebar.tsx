"use client";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <AppstoreOutlined />, label: <Link href={"/"}>Home</Link> },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
];

const Sidebar = () => {
  return (
    <div style={{ width: 256, height: "100vh" }}>
      <Menu
        className='h-full'
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        items={items}
      />
    </div>
  );
};

export default Sidebar;
