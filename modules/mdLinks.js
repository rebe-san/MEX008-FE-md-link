const readFile = require("./readFile.js");
const isMarkdown = require("./isMarkdown.js");
const getLinks = require("./getLinks.js");
const stats = require("./getStats.js");
const fs = require("fs");
const getMarkdownPaths = require("./getMarkdownPaths.js");
const validateLinks = require("./validateLinks.js");

// Funcion principal mdlinks
const mdLinks = (pathFile, option1, option2) => {
  let typePath = fs.statSync(pathFile).isFile();
  const promise = new Promise((resolve ,error) => {

    // La ruta es un archivo
    if (typePath === true) {

      // El archivo es markdown
      if (isMarkdown(pathFile)) {
        let data = readFile(pathFile);
        let arrLinks = getLinks(data, pathFile);

        // Resolver para stats
        if (option1 === "--stats" || option2 === "--stats") {
          resolve(stats(arrLinks));
        }

        // Resolver para validate
        if (option1 === "--validate" || option2 === "--validate") {
          resolve(validateLinks(arrLinks));
        }
        else resolve(arrLinks);
      }

      // El archivo no es mardown
      else reject(`El archivo no es markdown`);
    }

    // La ruta es un directorio
    else {
      console.log("Ya entro a checar directorios");
      resolve(
        getMarkdownPaths(pathFile).forEach(path => {
          let data = readFile(path);
          console.log(getLinks(data, path));
        })
      );
    }
  });
  return promise;
};
module.exports = mdLinks;
