const getLinks = require("../modules/getLinks");
const validateLinks = require("../modules/validateLinks");
const mdLinks = require("../modules/mdLinks");
const getStats = require("../modules/getStats");
const isMarkdown = require("../modules/isMarkdown");
const readFile = require("../modules/readFile.js");
const getMarkdownPaths = require("../modules/getMarkdownPaths.js");

const pathMd = "./examplesfiles/file.md";
const markdown = `Este es un mock de prueba para utilizarlo en los test de la funciones.
[Github](https://github.com)
[Google](https://google.com)
[Facebook](https://faceboo.com)
`;
const path = "./md-links-spec.js";
const links = [
  {
    file: "./md-links-spec.js",
    text: "Github",
    href: "https://github.com"
  },
  {
    file: "./md-links-spec.js",
    text: "Google",
    href: "https://google.com"
  },
  {
    file: "./md-links-spec.js",
    text: "Facebook",
    href: "https://faceboo.com"
  }
];
const linksValidated = [
  {
    file: "./md-links-spec.js",
    text: "Github",
    href: "https://github.com",
    status: "ok"
  },
  {
    file: "./md-links-spec.js",
    text: "Google",
    href: "https://google.com",
    status: "ok"
  },
  {
    file: "./md-links-spec.js",
    text: "Facebook",
    href: "https://faceboo.com",
    status: "fail"
  }
];
const stats = `Total : 3`;
const pathsMarkdown = [
  "./examplesfiles/README.md",
  "./examplesfiles/README_Labo.md",
  "./examplesfiles/archivo.md",
  "./examplesfiles/file.md"
];

//Test para getLinks
describe("get links function", () => {
  test("it should be get links to mardown", () => {
    expect(getLinks(markdown, path)).toEqual(links);
  });
});

// Test para validate
describe("validate links function", () => {
  test("it should validate links in markdown", () => {
    return expect(validateLinks(links)).resolves.toEqual(linksValidated);
  });
});
//Test para get stats
describe("get stats function", () => {
  test("it should be retur total links in a mardown file", () => {
    expect(getStats(links)).toBe(stats);
  });
});

//Test para is Markdown
describe("is markdown function", () => {
  test("it should be return true", () => {
    expect(isMarkdown(pathMd)).toEqual(true);
  });
  test("it should be return false", () => {
    expect(isMarkdown(path)).toEqual(false);
  });
});

//Test para read file
describe("read file function", () => {
  test("it should be return a string", () => {
    expect(readFile(pathMd)).toBe(markdown);
  });
});

//Test para get markdown paths
describe("get paths markdown files function", () => {
  test("it should be return paths to the markdown files in the directory", () => {
    expect(getMarkdownPaths("./examplesfiles/")).toEqual(pathsMarkdown);
  });
});
