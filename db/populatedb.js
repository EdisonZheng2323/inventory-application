const {Client} = require('pg');
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_name TEXT
);

CREATE TABLE toys (
  toy_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  name TEXT, 
  price FLOAT, 
  id INTEGER, FOREIGN KEY (id) REFERENCES categories(id));
`;

async function main(){
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST_NAME}:${process.env.PORT}/${process.env.DATABASE}`
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();