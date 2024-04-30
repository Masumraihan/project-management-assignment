import Sidebar from "@/components/shared/Sidebar";
import { Row } from "antd";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-screen bg-[#f4f5f7]'>
      <Row>
        <Sidebar />
        {children}
      </Row>
    </div>
  );
};

export default DashboardLayout;
