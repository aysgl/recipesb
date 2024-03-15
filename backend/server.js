const express = require("express");
const { getRecipes, getRecipe } = require("./controllers/RecipeController");
const cors = require("cors");
const routes = require("./routes/recipeRoute");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
