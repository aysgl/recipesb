const fs = require("fs");
const path = require("path");

exports.getData = () => {
  return JSON.parse(fs.readFileSync(`${__dirname}/../data/recipes.json`));
};
