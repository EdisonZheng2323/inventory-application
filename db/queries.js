const pool = require("./pool");

async function getAllCategories() {
  const {rows} = await pool.query("SELECT * FROM categories");
  return rows;
}

async function deleteToy(toy_name, id){
  await pool.query("DELETE FROM toys WHERE id = $1 AND name = $2", [id, toy_name]);
}

async function insertCategory(category_name){
  await pool.query("INSERT INTO categories (category_name) VALUES($1)", [category_name]);
}

async function insertToy(price, name, id){
  await pool.query("INSERT INTO toys (name, price, id) VALUES($1, $2, $3)", [name, price, id]);
}

async function getCategoryId(category_name){
  const {rows} = await pool.query("SELECT id FROM categories WHERE category_name = $1", [category_name]);
  return rows[0].id;
}

async function getAllToys(){
  const {rows} = await pool.query("SELECT * FROM toys");
  return rows;
}

async function getToy(toy_name){
  const {rows} = await pool.query("SELECT * FROM toys WHERE name = $1", [toy_name]);
  return rows;
}

async function getToysWithSameCategory(category_id){
  const {rows} = await pool.query("SELECT * FROM toys WHERE id = $1", [category_id]);
  return rows;
}

module.exports = {
  getAllCategories,
  insertCategory,
  getCategoryId,
  getAllToys,
  getToysWithSameCategory, 
  insertToy, 
  getToy, 
  deleteToy
};