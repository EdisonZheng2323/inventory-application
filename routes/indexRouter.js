const {Router} = require("express");
const indexRouter = Router();
const {getCategories, createCategoryGet, createCategoryPost, expandCategory, createToyGet, createToyPost, expandToy, deleteToy, deleteCategoryAndToys, updateCategoryGet, updateCategoryPost, updateToyGet, updateToyPost} = require("../controllers/indexController");

indexRouter.get("/", getCategories);
indexRouter.get("/categoryForm", createCategoryGet);
indexRouter.post("/", createCategoryPost);
indexRouter.get("/:category_name", expandCategory);
indexRouter.get("/:category_name/toyForm", createToyGet);
indexRouter.post("/:category_name/:toy_name/update", updateToyPost);
indexRouter.post("/:category_name", createToyPost);
indexRouter.get("/:category_name/:toy_name/delete", deleteToy);
indexRouter.get("/:category_name/:toy_name/update", updateToyGet);
indexRouter.get("/:category_name/delete", deleteCategoryAndToys);
indexRouter.get("/:category_name/update", updateCategoryGet);
indexRouter.post("/:category_name/update", updateCategoryPost);
indexRouter.get("/:category_name/:toy_name", expandToy);

module.exports = indexRouter;