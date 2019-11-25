// Manejo de la promesa mdLinks
const mdLink = require("./modules/mdLinks.js");

mdLink(process.argv[2], process.argv[3], process.argv[4])
// mdLink("README.md", "--validate")
  .then(res => {
    console.log(res);
  })
  .catch(res => {
    console.log(res);
  });
