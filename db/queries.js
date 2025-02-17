const pool = require("./pool");

async function getAllCategories() {
  const {rows} = await pool.query("SELECT * FROM categories ORDER BY id");
  return rows;
}

async function getToyData(id, toy_name){
  const {rows} = await pool.query("SELECT * FROM toys WHERE id = $1 AND name = $2", [id, toy_name]);
  return rows;
}

async function updateCategory(old_category_name, new_name){
  await pool.query("UPDATE categories SET category_name = $1 WHERE category_name = $2", [new_name, old_category_name]);
}

async function updateToy(id, toy_name, toy_price){
  await pool.query("UPDATE toys SET name = $1, price = $2 WHERE id = $3", [toy_name, toy_price, id]);
}

async function deleteToy(toy_name, id){
  await pool.query("DELETE FROM toys WHERE id = $1 AND name = $2", [id, toy_name]);
}

async function deleteAllToys(id){
  await pool.query("DELETE FROM toys WHERE id = $1", [id]);
}

async function deleteCategory(id){
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
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
  const {rows} = await pool.query("SELECT * FROM toys ORDER BY id");
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
  deleteToy,
  deleteAllToys,
  deleteCategory,
  updateCategory,
  getToyData,
  updateToy
};