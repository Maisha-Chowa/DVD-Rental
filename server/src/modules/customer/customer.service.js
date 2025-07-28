import pool from "../../../db.js";

const getAllCustomers = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM customer ORDER BY customer_id ASC"
    );
    return result.rows;
  } finally {
    client.release();
  }
};

const getCustomerById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM customer WHERE customer_id = $1",
      [id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createCustomer = async (data) => {
  const { first_name, last_name, email, address_id, store_id } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO customer (store_id, first_name, last_name, email, address_id, create_date)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING *`,
      [store_id, first_name, last_name, email, address_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updateCustomer = async (id, data) => {
  const { first_name, last_name, email } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE customer
       SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
       WHERE customer_id = $4
       RETURNING *`,
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deleteCustomer = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM customer WHERE customer_id = $1", [id]);
  } finally {
    client.release();
  }
};

export const customerService = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
