import pool from "../../../db.js";

const getAllfilms = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM film ORDER BY film_id ASC"
    );
    return result.rows;
  } finally {
    client.release();
  }
};

const getfilmById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM film WHERE film_id = $1", [
      id,
    ]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createfilm = async (data) => {
  const {
    title,
    description,
    release_year,
    language_id,
    rental_duration,
    rental_rate,
    length,
    replacement_cost,
    rating,
    last_update,
    speacial_features,
    fulltext,
  } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO film (
    title,
    description,
    release_year,
    language_id,
    rental_duration,
    rental_rate,
    length,
    replacement_cost,
    rating,
    last_update,
    speacial_features,
    fulltext)
       VALUES ($1, $2, $3, $4, $5,$6,$7, $8, $9, $10, $11,$12, NOW())
       RETURNING *`,
      [
        title,
        description,
        release_year,
        language_id,
        rental_duration,
        rental_rate,
        length,
        replacement_cost,
        rating,
        last_update,
        speacial_features,
        fulltext,
      ]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updatefilm = async (id, data) => {
  const { first_name, last_name, email } = data;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE film
       SET first_name = $1, last_name = $2, email = $3, last_update = NOW()
       WHERE film_id = $4
       RETURNING *`,
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deletefilm = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM film WHERE film_id = $1", [id]);
  } finally {
    client.release();
  }
};

export const filmService = {
  getAllfilms,
  getfilmById,
  createfilm,
  updatefilm,
  deletefilm,
};
