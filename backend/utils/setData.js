const fs = require("fs");

exports.setData = (data) => {
  fs.writeFile(
    `${__dirname}/../data/recipes.json`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Data written to file successfully.");
      }
    }
  );
};
