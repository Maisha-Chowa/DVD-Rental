import pool from "../../../db.js";

const getAllrentals = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM rental ORDER BY rental_id ASC"
    );
    return result.rows;
  } finally {
    client.release();
  }
};

const getrentalById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM rental WHERE rental_id = $1",
      [id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createrental = async (data) => {
  const { first_name, last_name, email, address_id, store_id } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO rental (store_id, first_name, last_name, email, address_id, create_date)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING *`,
      [store_id, first_name, last_name, email, address_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updaterental = async (id, data) => {
  const { first_name, last_name, email } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE rental
       SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
       WHERE rental_id = $4
       RETURNING *`,
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deleterental = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM rental WHERE rental_id = $1", [id]);
  } finally {
    client.release();
  }
};

export const rentalService = {
  getAllrentals,
  getrentalById,
  createrental,
  updaterental,
  deleterental,
};
