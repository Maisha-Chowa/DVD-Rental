import React from "react";
import {
  Table,
  Card,
  Typography,
  message,
  Button,
  Space,
  Popconfirm,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  useGetStaffQuery,
  useDeleteStaffMutation,
} from "../../services/rtkQueryApi";

const { Title } = Typography;

const Staff = () => {
  const { data: staff = [], isLoading, error } = useGetStaffQuery();
  const [deleteStaff, { isLoading: isDeleting }] = useDeleteStaffMutation();

  // Handle error
  React.useEffect(() => {
    if (error) {
      message.error("Failed to fetch staff");
    }
  }, [error]);

  const handleDelete = async (staffId) => {
    try {
      await deleteStaff(staffId).unwrap();
      message.success("Staff member deleted successfully");
    } catch {
      message.error("Failed to delete staff member");
    }
  };

  const handleEdit = (record) => {
    // TODO: Implement edit functionality
    message.info(`Edit staff: ${record.first_name} ${record.last_name}`);
  };

  const columns = [
    {
      title: "Staff ID",
      dataIndex: "staff_id",
      key: "staff_id",
      width: 100,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      width: 150,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Store ID",
      dataIndex: "store_id",
      key: "store_id",
      width: 100,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      width: 100,
      render: (active) => (
        <span style={{ color: active ? "green" : "red" }}>
          {active ? "Yes" : "No"}
        </span>
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: 150,
    },
    {
      title: "Last Update",
      dataIndex: "last_update",
      key: "last_update",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString(),
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
            title="Are you sure you want to delete this staff member?"
            description="This action cannot be undone."
            onConfirm={() => handleDelete(record.staff_id)}
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
          Staff
        </Title>
        <Table
          columns={columns}
          dataSource={staff}
          rowKey="staff_id"
          loading={isLoading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} staff members`,
          }}
          scroll={{ x: 1400 }}
        />
      </Card>
    </div>
  );
};

export default Staff;
