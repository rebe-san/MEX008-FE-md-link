const fs = require("fs");
const isMarkdown = require("./isMarkdown.js");

const getMarkdownPaths = pathFile => {
  return fs
    .readdirSync(pathFile)
    .filter(file => isMarkdown(file))
    .map(file => `${pathFile}${file}`);
};
module.exports = getMarkdownPaths;
