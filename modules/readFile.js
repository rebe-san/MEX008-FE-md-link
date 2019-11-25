const fs = require("fs");

// Funcion que lee el archivo y devuelve el contenido en forma de string
const readFile = pathFile => {
  return fs.readFileSync(pathFile, "utf-8");
};
module.exports = readFile;
