import pool from "../../../db.js";
const db = await pool.connect();

const getAllCustomers = async () => {
  const result = await db.query(
    "SELECT * FROM customer ORDER BY customer_id ASC"
  );
  return result.rows;
};

const getCustomerById = async (id) => {
  const result = await db.query(
    "SELECT * FROM customer WHERE customer_id = $1",
    [id]
  );
  return result.rows[0];
};

const createCustomer = async (data) => {
  const { first_name, last_name, email, address_id, store_id } = data;
  const result = await db.query(
    `INSERT INTO customer (store_id, first_name, last_name, email, address_id, create_date)
     VALUES ($1, $2, $3, $4, $5, NOW())
     RETURNING *`,
    [store_id, first_name, last_name, email, address_id]
  );
  return result.rows[0];
};

const updateCustomer = async (id, data) => {
  const { first_name, last_name, email } = data;
  const result = await db.query(
    `UPDATE customer
     SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
     WHERE customer_id = $4
     RETURNING *`,
    [first_name, last_name, email, id]
  );
  return result.rows[0];
};

const deleteCustomer = async (id) => {
  await db.query("DELETE FROM customer WHERE customer_id = $1", [id]);
};

export const customerService = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
