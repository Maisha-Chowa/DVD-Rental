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
  useGetFilmsQuery,
  useDeleteFilmMutation,
} from "../../services/rtkQueryApi";

const { Title } = Typography;

const Films = () => {
  const { data: films = [], isLoading, error } = useGetFilmsQuery();
  const [deleteFilm, { isLoading: isDeleting }] = useDeleteFilmMutation();

  // Handle error
  React.useEffect(() => {
    if (error) {
      message.error("Failed to fetch films");
    }
  }, [error]);

  const handleDelete = async (filmId) => {
    try {
      await deleteFilm(filmId).unwrap();
      message.success("Film deleted successfully");
    } catch {
      message.error("Failed to delete film");
    }
  };

  const handleEdit = (record) => {
    // TODO: Implement edit functionality
    message.info(`Edit film: ${record.title}`);
  };

  const columns = [
    {
      title: "Film ID",
      dataIndex: "film_id",
      key: "film_id",
      width: 100,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 200,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 300,
      ellipsis: true,
    },
    {
      title: "Release Year",
      dataIndex: "release_year",
      key: "release_year",
      width: 120,
    },
    {
      title: "Language",
      dataIndex: "language_id",
      key: "language_id",
      width: 100,
    },
    {
      title: "Rental Duration",
      dataIndex: "rental_duration",
      key: "rental_duration",
      width: 140,
      render: (duration) => `${duration} days`,
    },
    {
      title: "Rental Rate",
      dataIndex: "rental_rate",
      key: "rental_rate",
      width: 120,
      render: (rate) => `$${rate}`,
    },
    {
      title: "Length",
      dataIndex: "length",
      key: "length",
      width: 100,
      render: (length) => `${length} min`,
    },
    {
      title: "Replacement Cost",
      dataIndex: "replacement_cost",
      key: "replacement_cost",
      width: 150,
      render: (cost) => `$${cost}`,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: 100,
      render: (rating) => (
        <Tag
          color={
            rating === "G"
              ? "green"
              : rating === "PG"
              ? "blue"
              : rating === "PG-13"
              ? "orange"
              : rating === "R"
              ? "red"
              : "default"
          }
        >
          {rating}
        </Tag>
      ),
    },
    {
      title: "Special Features",
      dataIndex: "special_features",
      key: "special_features",
      width: 150,
      render: (features) => (
        <div>
          {features &&
            features.map((feature, index) => (
              <Tag key={index} size="small">
                {feature}
              </Tag>
            ))}
        </div>
      ),
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
            title="Are you sure you want to delete this film?"
            description="This action cannot be undone."
            onConfirm={() => handleDelete(record.film_id)}
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
          Films
        </Title>
        <Table
          columns={columns}
          dataSource={films}
          rowKey="film_id"
          loading={isLoading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} films`,
          }}
          scroll={{ x: 1700 }}
        />
      </Card>
    </div>
  );
};

export default Films;
