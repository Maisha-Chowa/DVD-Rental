import pool from "../../../db.js";

const getAllstaffs = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM staff ORDER BY staff_id ASC"
    );
    return result.rows;
  } finally {
    client.release();
  }
};

const getstaffById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM staff WHERE staff_id = $1",
      [id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createstaff = async (data) => {
  const { first_name, last_name, email, address_id, store_id } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO staff (store_id, first_name, last_name, email, address_id, create_date)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING *`,
      [store_id, first_name, last_name, email, address_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updatestaff = async (id, data) => {
  const { first_name, last_name, email } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE staff
       SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
       WHERE staff_id = $4
       RETURNING *`,
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deletestaff = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM staff WHERE staff_id = $1", [id]);
  } finally {
    client.release();
  }
};

export const staffService = {
  getAllstaffs,
  getstaffById,
  createstaff,
  updatestaff,
  deletestaff,
};
