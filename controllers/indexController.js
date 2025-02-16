const db = require('../db/queries');

async function getCategories(req, res){
  const categories = await db.getAllCategories();
  res.render("index", {categories: categories});
}

async function deleteToy(req, res){
  const category_name = req.params.category_name;
  const toy_name = req.params.toy_name;
  const id = await db.getCategoryId(category_name);
  await db.deleteToy(toy_name, id);
  res.redirect(`/${category_name}`);
}

async function createToyGet(req, res){
  const category_name = req.params.category_name;
  res.render("toyForm", {category_name: category_name});
}

async function createToyPost(req, res){
  const category_name = req.params.category_name;
  const {toy_name, toy_price} = req.body;
  const id = await db.getCategoryId(category_name)
  await db.insertToy(toy_price, toy_name, id);
  res.redirect(`/${category_name}`);
}

async function createCategoryGet(req, res){
  res.render("categoryForm");
}

async function createCategoryPost(req, res){
  const {category_name} = req.body;
  await db.insertCategory(category_name);
  res.redirect("/");
}

async function expandToy(req, res){
  const toy_name = req.params.toy_name;
  const category_name = req.params.category_name;
  const toy = await db.getToy(toy_name);
  res.render("toy", {toy: toy, category_name: category_name});
}

async function expandCategory(req, res){
  const category_name = req.params.category_name;
  const category_id = await db.getCategoryId(category_name);
  const toys = await db.getToysWithSameCategory(category_id);

  res.render("category", {category_id: category_id, category_name: category_name, toys: toys});
}

module.exports = {
  getCategories,
  createCategoryGet,
  createCategoryPost,
  expandCategory,
  createToyGet, 
  createToyPost,
  expandToy,
  deleteToy
}