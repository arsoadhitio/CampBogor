CREATE DATABASE camp_database;
CREATE TABLE camp(
  camp_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  address TEXT,
  long FLOAT,
  lat FLOAT,
  phone BIGINT,
  description TEXT
);