const { getData } = require("../utils/getData");
const crypto = require("crypto");
const { setData } = require("../utils/setData");

const data = getData();
exports.getRecipes = (req, res) => {
  const { category, title, order, ingredients } = req.query;

  let filtered = data;

  if (category) {
    filtered = filtered.filter((recipe) =>
      recipe.category.toLowerCase().includes(category)
    );
  }

  if (title) {
    filtered = filtered.filter((recipe) =>
      recipe.title.toLowerCase().includes(title)
    );
  }

  if (ingredients) {
    const keyword = ingredients.trim().toLowerCase(); // Değişken adını keyword olarak güncellendi
    filtered = filtered.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(keyword)
      )
    );
  }

  if (order === "asc" || order === "desc") {
    filtered.sort((a, b) => {
      if (order === "asc") {
        return a.time.localeCompare(b.time);
      } else {
        return b.time.localeCompare(a.time);
      }
    });
  }

  res.status(200).json({
    message: "success",
    result: filtered.length,
    recipes: filtered,
  });
};

exports.getRecipe = (req, res) => {
  res.status(200).json({ message: "success", recipe: req.recipe });
};

exports.createRecipe = (req, res) => {
  const newRecipe = req.body;
  console.log("req body", req.body);
  if (
    !newRecipe.title ||
    !newRecipe.time ||
    !newRecipe.category ||
    !newRecipe.ingredients ||
    !newRecipe.instructions ||
    !newRecipe.image
  ) {
    return res.status(404).json({ message: "Missing required fields" });
  }

  newRecipe.id = crypto.randomUUID();

  data.push(newRecipe);
  setData(data);

  res.status(200).json({ message: "success", recipe: data });
};

exports.deleteRecipe = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newData = data.filter((recipe) => recipe.id !== id);
  setData(newData);
  res.status(204).end();
};

exports.updateRecipe = (req, res) => {};
