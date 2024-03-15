const express = require("express");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
} = require("../controllers/RecipeController");
const { controlId } = require("../middleware");

const router = express.Router();

router.route("/api/recipes").get(getRecipes).post(createRecipe);

router
  .route("/api/recipes/:id")
  .get(controlId, getRecipe)
  .delete(controlId, deleteRecipe);

module.exports = router;
