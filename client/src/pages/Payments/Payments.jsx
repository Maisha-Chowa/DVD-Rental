import React from "react";
import { Card, Typography, Empty } from "antd";

const { Title } = Typography;

const Payments = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Card>
        <Title level={2} style={{ marginBottom: "24px" }}>
          Payments
        </Title>
        <Empty
          description="Payment module not implemented yet"
          style={{ marginTop: "50px" }}
        />
      </Card>
    </div>
  );
};

export default Payments;
