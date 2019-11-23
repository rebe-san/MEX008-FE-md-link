// Manejo de la promesa mdLinks
const mdLinks = require("./modules/mdLinks.js");

mdLinks(process.argv[2], process.argv[3], process.argv[4])
  .then(res => {
    console.log(res);
  })
  .catch(res => {
    console.log(res);
  });
