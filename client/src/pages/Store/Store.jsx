import React from "react";
import { Table, Card, Typography, message } from "antd";
import { useGetStoresQuery } from "../../services/rtkQueryApi";

const { Title } = Typography;

const Store = () => {
  const { data: stores = [], isLoading, error } = useGetStoresQuery();

  // Handle error
  React.useEffect(() => {
    if (error) {
      message.error("Failed to fetch stores");
    }
  }, [error]);

  const columns = [
    {
      title: "Store ID",
      dataIndex: "store_id",
      key: "store_id",
      width: 100,
    },
    {
      title: "Manager Staff ID",
      dataIndex: "manager_staff_id",
      key: "manager_staff_id",
      width: 150,
    },
    {
      title: "Address ID",
      dataIndex: "address_id",
      key: "address_id",
      width: 120,
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
          Stores
        </Title>
        <Table
          columns={columns}
          dataSource={stores}
          rowKey="store_id"
          loading={isLoading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} stores`,
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
};

export default Store;
