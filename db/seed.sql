-- DVD Rental Database Seed Data
-- This file contains sample data for testing and development

-- Insert sample customers
INSERT INTO customers (first_name, last_name, email, phone, address) VALUES
('John', 'Doe', 'john.doe@email.com', '555-0101', '123 Main St, Anytown, USA'),
('Jane', 'Smith', 'jane.smith@email.com', '555-0102', '456 Oak Ave, Somewhere, USA'),
('Mike', 'Johnson', 'mike.johnson@email.com', '555-0103', '789 Pine Rd, Elsewhere, USA'),
('Sarah', 'Williams', 'sarah.williams@email.com', '555-0104', '321 Elm St, Nowhere, USA'),
('David', 'Brown', 'david.brown@email.com', '555-0105', '654 Maple Dr, Anywhere, USA');

-- Insert sample DVDs
INSERT INTO dvds (title, director, release_year, genre, rating, available) VALUES
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama', 'R', true),
('The Godfather', 'Francis Ford Coppola', 1972, 'Crime', 'R', true),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime', 'R', true),
('The Dark Knight', 'Christopher Nolan', 2008, 'Action', 'PG-13', true),
('Fight Club', 'David Fincher', 1999, 'Drama', 'R', true),
('Inception', 'Christopher Nolan', 2010, 'Sci-Fi', 'PG-13', true),
('The Matrix', 'Lana Wachowski', 1999, 'Sci-Fi', 'R', true),
('Goodfellas', 'Martin Scorsese', 1990, 'Crime', 'R', true),
('The Silence of the Lambs', 'Jonathan Demme', 1991, 'Thriller', 'R', true),
('Forrest Gump', 'Robert Zemeckis', 1994, 'Drama', 'PG-13', true);

-- Insert sample rentals (some returned, some not)
INSERT INTO rentals (customer_id, dvd_id, rental_date, return_date, due_date, returned) VALUES
(1, 1, '2024-01-15 10:00:00', '2024-01-18 14:30:00', '2024-01-22 10:00:00', true),
(2, 3, '2024-01-16 11:00:00', NULL, '2024-01-23 11:00:00', false),
(3, 5, '2024-01-14 09:00:00', '2024-01-17 16:00:00', '2024-01-21 09:00:00', true),
(4, 7, '2024-01-17 13:00:00', NULL, '2024-01-24 13:00:00', false),
(5, 2, '2024-01-13 15:00:00', '2024-01-19 12:00:00', '2024-01-20 15:00:00', true); 