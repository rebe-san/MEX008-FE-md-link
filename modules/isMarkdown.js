const path = require("path");

// Funcion para comprobar que el archivo es Markdown
const isMarkdown = pathFile => {
  let extFile = path.extname(pathFile);
  return extFile === ".md";
};
module.exports = isMarkdown;
