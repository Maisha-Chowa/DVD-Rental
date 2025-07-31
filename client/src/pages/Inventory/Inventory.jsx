import React from "react";
import { Table, Card, Typography, message } from "antd";
import { useGetInventoryQuery } from "../../services/rtkQueryApi";

const { Title } = Typography;

const Inventory = () => {
  const { data: inventory = [], isLoading, error } = useGetInventoryQuery();

  // Handle error
  React.useEffect(() => {
    if (error) {
      message.error("Failed to fetch inventory");
    }
  }, [error]);

  const columns = [
    {
      title: "Inventory ID",
      dataIndex: "inventory_id",
      key: "inventory_id",
      width: 120,
    },
    {
      title: "Film ID",
      dataIndex: "film_id",
      key: "film_id",
      width: 100,
    },
    {
      title: "Store ID",
      dataIndex: "store_id",
      key: "store_id",
      width: 100,
    },
    {
      title: "Last Update",
      dataIndex: "last_update",
      key: "last_update",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Card>
        <Title level={2} style={{ marginBottom: "24px" }}>
          Inventory
        </Title>
        <Table
          columns={columns}
          dataSource={inventory}
          rowKey="inventory_id"
          loading={isLoading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} inventory items`,
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
};

export default Inventory;
