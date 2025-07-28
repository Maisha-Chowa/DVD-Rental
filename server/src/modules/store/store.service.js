import pool from "../../../db.js";

const getAllstores = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM store ORDER BY store_id ASC"
    );
    return result.rows;
  } finally {
    client.release();
  }
};

const getstoreById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM store WHERE store_id = $1",
      [id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createstore = async (data) => {
  const { first_name, last_name, email, address_id, store_id } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO store (store_id, first_name, last_name, email, address_id, create_date)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING *`,
      [store_id, first_name, last_name, email, address_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updatestore = async (id, data) => {
  const { first_name, last_name, email } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE store
       SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
       WHERE store_id = $4
       RETURNING *`,
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deletestore = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM store WHERE store_id = $1", [id]);
  } finally {
    client.release();
  }
};

export const storeService = {
  getAllstores,
  getstoreById,
  createstore,
  updatestore,
  deletestore,
};
