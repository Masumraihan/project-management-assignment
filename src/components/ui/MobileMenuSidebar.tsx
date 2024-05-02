"use client";
import Sidebar from "../shared/Sidebar";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const MobileMenuSidebar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined size={20} onClick={showDrawer} />
      <Drawer width={300} title='Project Management' onClose={onClose} open={open}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default MobileMenuSidebar;
