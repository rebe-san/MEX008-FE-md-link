// Funcion que halla los links del markdown
const getLinks = (data, path) => {
  const regExp = /\[(.+)\]\((https?.+)\)/gm;

  // Match es un arreglo con los elementos [text y url , text , url ,,index , input]
  let match;
  let arrLink = [];
  while ((match = regExp.exec(data)) !== null) {
    let objLink = {
      file: path,

      // Texto del link
      text: match[1],

      // URL
      href: match[2]
    };
    arrLink.push(objLink);
  }
  return arrLink;
};

module.exports = getLinks;
