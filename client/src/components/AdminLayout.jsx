// src/components/AdminLayout.jsx
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sidebarItems = [
    {
      key: "/",
      icon: <UserOutlined />,
      label: "Dashboard",
    },
    {
      key: "/customers",
      icon: <LaptopOutlined />,
      label: "Customers",
    },
    {
      key: "/films",
      icon: <NotificationOutlined />,
      label: "Films",
    },
    {
      key: "/rentals",
      icon: <NotificationOutlined />,
      label: "Rentals",
    },
    {
      key: "/payments",
      icon: <NotificationOutlined />,
      label: "Payments",
    },
    {
      key: "/Reports",
      icon: <NotificationOutlined />,
      label: "Reports",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          items={[{ key: "1", label: "Admin Panel" }]}
          style={{ flex: 1 }}
        />
      </Header>

      <Layout style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            { title: "Home" },
            { title: location.pathname.replace("/", "") || "Dashboard" },
          ]}
        />

        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              selectedKeys={[location.pathname]}
              style={{ height: "100%" }}
              items={sidebarItems}
              onClick={(e) => navigate(e.key)}
            />
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        DVD Rental Admin ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AdminLayout;
