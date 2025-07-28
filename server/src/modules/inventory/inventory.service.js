import pool from "../../../db.js";

const getAllinventory = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM inventory ORDER BY inventory_id ASC"
    );
    return result.rows;
  } finally {
    client.release();
  }
};

const getinventoryById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM inventory WHERE inventory_id = $1",
      [id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createinventory = async (data) => {
  const { first_name, last_name, email, address_id, store_id } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO inventory (store_id, first_name, last_name, email, address_id, create_date)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING *`,
      [store_id, first_name, last_name, email, address_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updateinventory = async (id, data) => {
  const { first_name, last_name, email } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE inventory
       SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
       WHERE inventory_id = $4
       RETURNING *`,
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deleteinventory = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM inventory WHERE inventory_id = $1", [id]);
  } finally {
    client.release();
  }
};

export const inventoryService = {
  getAllinventory,
  getinventoryById,
  createinventory,
  updateinventory,
  deleteinventory,
};
