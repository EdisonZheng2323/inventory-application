const {Router} = require("express");
const indexRouter = Router();
const {getCategories, createCategoryGet, createCategoryPost, expandCategory, createToyGet, createToyPost, expandToy, deleteToy} = require("../controllers/indexController");

indexRouter.get("/", getCategories);
indexRouter.get("/categoryForm", createCategoryGet);
indexRouter.post("/", createCategoryPost);
indexRouter.get("/:category_name", expandCategory);
indexRouter.get("/:category_name/toyForm", createToyGet);
indexRouter.post("/:category_name", createToyPost);
indexRouter.get("/:category_name/:toy_name", expandToy);
indexRouter.get("/:category_name/:toy_name/delete", deleteToy);

module.exports = indexRouter;