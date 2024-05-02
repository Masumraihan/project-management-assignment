import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/ui/Header";
import { Col, Row } from "antd";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-screen bg-[#f4f5f7]'>
      <Row>
        <Col xs={0} md={6} lg={4} className='sidebar'>
          <Sidebar />
        </Col>
        <Col
          xs={24}
          md={18}
          lg={20}
          style={{ height: "100vh", overflow: "auto" }}
        >
          <Header />
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default DashboardLayout;
