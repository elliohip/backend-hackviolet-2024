CREATE DATABASE safe_dt;

CREATE TABLE "user"(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(250),
    hashed_password TEXT,
    email VARCHAR(256),
    screen_name VARCHAR(50),
    pfp_path TEXT
);

CREATE TABLE token(
    token_id SERIAL PRIMARY KEY,
    FOREIGN KEY user_id INT REFERENCES "user",
    token_str TEXT
);

CREATE TABLE group(
    group_id SERIAL PRIMARY KEY,
    group_name TEXT
);

CREATE TABLE group_instance(
    group_instance_id SERIAL PRIMARY KEY,
    FOREIGN KEY group_id INT REFERENCES "group",
    FOREIGN KEY user_id INT REFERENCES "user"
);