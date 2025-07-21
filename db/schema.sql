-- DVD Rental Database Schema
-- This file contains the DDL (Data Definition Language) for the DVD rental system

-- Create database (run this separately if needed)
-- CREATE DATABASE dvd_rental;

-- Use the database
-- \c dvd_rental;

-- Create tables
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dvds (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    director VARCHAR(100),
    release_year INTEGER,
    genre VARCHAR(50),
    rating VARCHAR(10),
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rentals (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    dvd_id INTEGER REFERENCES dvds(id),
    rental_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    return_date TIMESTAMP,
    due_date TIMESTAMP NOT NULL,
    returned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_rentals_customer_id ON rentals(customer_id);
CREATE INDEX IF NOT EXISTS idx_rentals_dvd_id ON rentals(dvd_id);
CREATE INDEX IF NOT EXISTS idx_dvds_available ON dvds(available); 