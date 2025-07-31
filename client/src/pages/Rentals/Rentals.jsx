import React from "react";
import {
  Table,
  Card,
  Typography,
  message,
  Tag,
  Button,
  Space,
  Popconfirm,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  useGetRentalsQuery,
  useDeleteRentalMutation,
} from "../../services/rtkQueryApi";

const { Title } = Typography;

const Rentals = () => {
  const { data: rentals = [], isLoading, error } = useGetRentalsQuery();
  const [deleteRental, { isLoading: isDeleting }] = useDeleteRentalMutation();

  // Handle error
  React.useEffect(() => {
    if (error) {
      message.error("Failed to fetch rentals");
    }
  }, [error]);

  const handleDelete = async (rentalId) => {
    try {
      await deleteRental(rentalId).unwrap();
      message.success("Rental deleted successfully");
    } catch {
      message.error("Failed to delete rental");
    }
  };

  const handleEdit = (record) => {
    // TODO: Implement edit functionality
    message.info(`Edit rental: ${record.rental_id}`);
  };

  const columns = [
    {
      title: "Rental ID",
      dataIndex: "rental_id",
      key: "rental_id",
      width: 120,
    },
    {
      title: "Rental Date",
      dataIndex: "rental_date",
      key: "rental_date",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Inventory ID",
      dataIndex: "inventory_id",
      key: "inventory_id",
      width: 120,
    },
    {
      title: "Customer ID",
      dataIndex: "customer_id",
      key: "customer_id",
      width: 120,
    },
    {
      title: "Return Date",
      dataIndex: "return_date",
      key: "return_date",
      width: 150,
      render: (date) =>
        date ? new Date(date).toLocaleDateString() : "Not returned",
    },
    {
      title: "Staff ID",
      dataIndex: "staff_id",
      key: "staff_id",
      width: 100,
    },
    {
      title: "Last Update",
      dataIndex: "last_update",
      key: "last_update",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Status",
      key: "status",
      width: 120,
      render: (_, record) => (
        <Tag color={record.return_date ? "green" : "orange"}>
          {record.return_date ? "Returned" : "Rented"}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this rental?"
            description="This action cannot be undone."
            onConfirm={() => handleDelete(record.rental_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
              loading={isDeleting}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Card>
        <Title level={2} style={{ marginBottom: "24px" }}>
          Rentals
        </Title>
        <Table
          columns={columns}
          dataSource={rentals}
          rowKey="rental_id"
          loading={isLoading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} rentals`,
          }}
          scroll={{ x: 1400 }}
        />
      </Card>
    </div>
  );
};

export default Rentals;
