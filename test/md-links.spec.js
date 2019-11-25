const getLinks = require("../modules/getLinks");
const validateLinks = require("../modules/validateLinks");
const mdLinks = require("../modules/mdLinks");
const getStats = require("../modules/getStats");
const isMarkdown = require("../modules/isMarkdown");
const readFile = require("../modules/readFile.js");
const getMarkdownPaths = require("../modules/getMarkdownPaths.js");

const pathMd = "./examplesfiles/file.md";
const path = "./md-links-spec.js";
const markdown = `Este es un mock de prueba para utilizarlo en los test de la funciones.
[Github](https://github.com)
[Google](https://google.com)
[Facebook](https://faceboo.com)
`;
const pathsMarkdown = [
  "./examplesfiles/README.md",
  "./examplesfiles/README_Labo.md",
  "./examplesfiles/archivo.md",
  "./examplesfiles/file.md"
];

const links = [
  {
    file: "./examplesfiles/file.md",
    text: "Github",
    href: "https://github.com"
  },
  {
    file: "./examplesfiles/file.md",
    text: "Google",
    href: "https://google.com"
  },
  {
    file: "./examplesfiles/file.md",
    text: "Facebook",
    href: "https://faceboo.com"
  }
];
const linksValidated = [
  {
    file: "./examplesfiles/file.md",
    text: "Github",
    href: "https://github.com",
    status: "ok"
  },
  {
    file: "./examplesfiles/file.md",
    text: "Google",
    href: "https://google.com",
    status: "ok"
  },
  {
    file: "./examplesfiles/file.md",
    text: "Facebook",
    href: "https://faceboo.com",
    status: "fail"
  }
];
const stats = `Total : 3`;

//Test para getLinks
describe("get links function", () => {
  test("it should be get links to mardown", () => {
    expect(getLinks(markdown, pathMd)).toEqual(links);
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

//Test para md links
describe("markdown files function", () => {
  test("resolves the path and return an array with all links in that file or directory", () => {
    return mdLinks(pathMd).then(data => {
      expect(data).toEqual(links);
    });
  });
  test("validate links an show the result in array", () => {
    return mdLinks(pathMd, "--validate").then(data => {
      expect(data).toEqual(linksValidated);
    });
  });
});
