![npm](https://img.shields.io/npm/v/md-link-rebeca)
# Markdown Links

Este modulo fue diseñado para cumplir con el siguiente [proposito](https://github.com/Laboratoria/MEX008-FE-md-link) como parte del Bootcamp de Laboratoria.

## Instalación

Para instalar la dependencia en tu proyecto.

```sh
 npm install md-link-rebeca
 ``` 

## Uso

* Require
```js

const  mdLinks = require("md-link-rebeca");

// Caso 1 .- Ruta relativa sin opciones

mdLinks("./some/example.md")

.then(links  => {

//=> [{ href, text, file }]

})
.catch(console.error);

  
// Caso .- Ruta relativa con opcion (validate)

mdLinks("./some/example.md", { validate:  true })

.then(links  => {

// => [{ href, text, file, status, ok }]

})

.catch(console.error);

  
// Caso 3 .- Ruta relativa de un directorio sin options

mdLinks("./some/dir")

.then(links  => {

// => [{ href, text, file }]

})

.catch(console.error);
 

```

* CLI (Command Line Interface - Interfaz de Línea de Comando)

  
Ruta relativa sin opciones

```sh

$ md-links ./some/example.md

```

Ruta relativa con opcion validate

```sh

$ md-links ./some/example.md --validate

```

Ruta relativa con opcion stats

```sh

$ md-links ./some/example.md --stats

```
