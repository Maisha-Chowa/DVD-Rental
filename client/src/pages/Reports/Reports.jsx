import React from "react";
import { Card, Typography, Empty } from "antd";

const { Title } = Typography;

const Reports = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Card>
        <Title level={2} style={{ marginBottom: "24px" }}>
          Reports
        </Title>
        <Empty
          description="Reports module not implemented yet"
          style={{ marginTop: "50px" }}
        />
      </Card>
    </div>
  );
};

export default Reports;
