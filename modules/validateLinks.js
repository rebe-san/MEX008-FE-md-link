const fetch = require("node-fetch");

// Funcion que valida si los links esta disponibles haciendo una peticion http
const validateLinks = array => {
  let arr = array.map(async link => {
    let test;
    try {
      await fetch(link.href);
      test = "ok";
    } catch (error) {
      test = "fail";
    }
    return { ...link, status: test };
  });
  return Promise.all(arr);
};

module.exports = validateLinks;
