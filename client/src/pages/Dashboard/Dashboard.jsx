import React from "react";
import { Card, Row, Col, Statistic, Typography, message } from "antd";
import {
  UserOutlined,
  PlayCircleOutlined,
  DatabaseOutlined,
  TeamOutlined,
  ShopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  useGetCustomersQuery,
  useGetFilmsQuery,
  useGetInventoryQuery,
  useGetStaffQuery,
  useGetStoresQuery,
  useGetRentalsQuery,
} from "../../services/rtkQueryApi";

const { Title } = Typography;

const Dashboard = () => {
  const { data: customers = [], error: customersError } =
    useGetCustomersQuery();
  const { data: films = [], error: filmsError } = useGetFilmsQuery();
  const { data: inventory = [], error: inventoryError } =
    useGetInventoryQuery();
  const { data: staff = [], error: staffError } = useGetStaffQuery();
  const { data: stores = [], error: storesError } = useGetStoresQuery();
  const { data: rentals = [], error: rentalsError } = useGetRentalsQuery();

  // Handle errors
  React.useEffect(() => {
    if (
      customersError ||
      filmsError ||
      inventoryError ||
      staffError ||
      storesError ||
      rentalsError
    ) {
      message.error("Failed to fetch dashboard statistics");
    }
  }, [
    customersError,
    filmsError,
    inventoryError,
    staffError,
    storesError,
    rentalsError,
  ]);

  const stats = {
    customers: customers.length,
    films: films.length,
    inventory: inventory.length,
    staff: staff.length,
    stores: stores.length,
    rentals: rentals.length,
  };

  const statCards = [
    {
      title: "Total Customers",
      value: stats.customers,
      icon: <UserOutlined />,
      color: "#1890ff",
    },
    {
      title: "Total Films",
      value: stats.films,
      icon: <PlayCircleOutlined />,
      color: "#52c41a",
    },
    {
      title: "Inventory Items",
      value: stats.inventory,
      icon: <DatabaseOutlined />,
      color: "#faad14",
    },
    {
      title: "Staff Members",
      value: stats.staff,
      icon: <TeamOutlined />,
      color: "#722ed1",
    },
    {
      title: "Stores",
      value: stats.stores,
      icon: <ShopOutlined />,
      color: "#eb2f96",
    },
    {
      title: "Total Rentals",
      value: stats.rentals,
      icon: <NotificationOutlined />,
      color: "#f5222d",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2} style={{ marginBottom: "24px" }}>
        Dashboard
      </Title>
      <p style={{ marginBottom: "24px", color: "#666" }}>
        Welcome to your DVD Rental Management System
      </p>

      <Row gutter={[16, 16]}>
        {statCards.map((stat, index) => (
          <Col xs={24} sm={12} lg={8} xl={8} key={index}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
                valueStyle={{ color: stat.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card style={{ marginTop: "24px" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>
          Quick Actions
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Card size="small" hoverable>
              <div style={{ textAlign: "center" }}>
                <PlayCircleOutlined
                  style={{ fontSize: "24px", color: "#52c41a" }}
                />
                <div style={{ marginTop: "8px" }}>Manage Films</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card size="small" hoverable>
              <div style={{ textAlign: "center" }}>
                <UserOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
                <div style={{ marginTop: "8px" }}>Manage Customers</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card size="small" hoverable>
              <div style={{ textAlign: "center" }}>
                <NotificationOutlined
                  style={{ fontSize: "24px", color: "#f5222d" }}
                />
                <div style={{ marginTop: "8px" }}>Manage Rentals</div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;
