![npm](https://img.shields.io/npm/v/md-link-rebeca)

# Markdown Links

Este modulo fue diseñado para cumplir con el siguiente [propósito](https://github.com/Laboratoria/MEX008-FE-md-link) como parte del Bootcamp de Laboratoria:

Crear una librería usando [Node.js](https://nodejs.org/), que lea y analice archivos en formato `Markdown`, para verificar los links que contengan .

El modulo recibe los siguientes argumentos:

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio, donde se encuentra el archivo o archivos markdown.
- `options`:
  - `validate`: Verifica los links encontrados
  - `stats`: Devuelve el total de links encontrados

##### Valor de retorno

Retorna un array de objetos , donde cada objeto representa un link y contiene las siguientes propiedades:

- `file`: Ruta del archivo donde se encontró el link.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `href`: URL encontrada.

## Instalación

Para instalar la dependencia en tu proyecto.

    npm install md-link-rebeca

## Uso

### Require

```js
const mdLinks = require("md-link-rebeca");

// Caso 1 .- Ruta relativa sin opciones

mdLinks("./folder/example.md")
  .then(links => {
    //=> [{ href, text, file }]
  })
  .catch(console.error);

// Caso 2.- Ruta relativa con opcion (validate)

mdLinks("./folder/example.md", "--validate")
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

// Caso 3 .- Ruta relativa con opcion (stats)

mdLinks("./folder/example.md", "--stats")
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

// Caso 4 .- Ruta absoluta de un archivo sin opciones

mdLinks("/.../dir/file.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

// Caso 5 .- Ruta absoluta de un archivo con opcion "--validate"

mdLinks("/.../dir/file.md", "--validate")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

// Caso 6 .- Ruta absoluta de un archivo con opcion "--stats"

mdLinks("/.../dir/file.md", "--stats")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

// Caso 7 .- Ruta absoluta de un directorio sin opciones

mdLinks("/.../dir/")
  .then(links => {
    })
    // => [{ href, text, file }]
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

Caso 1 .- Ruta relativa sin opciones :
Esta opción muestra los respectivos links que se ecnuntran dentro del archivo.

```
$ mdLinks ./folder/file.md

[ { file: './folder/file.md',
 text: 'Leer un archivo',
 href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback' },
 { file: './folder/file.md' ,
 text: 'Leer un directorio',
 href:'https:
 //nodejs.or/api/fs.html#fs_fs_readdir_path_options_callback' }]
```

Caso 2.- Ruta relativa con el flag --validate
Esta opción muestra los respectivos links que se encuentran dentro del archivo y los valida.

```
 $ mdLinks ./folder/file.md --validate

[ { file: './folder/file.md',
 text: 'Leer un archivo',
 href:'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback' ,
 status: 'ok' },
 { file:'./folder/file.md' ,
 text: 'Leer un directorio',
 href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback' ,
 status: 'ok' }]
```

Caso 3 .- Ruta relativa con el flag --stats
Este flag stats determina y muestra el total de los links encontrados dentro del archivo.

```
$ mdLinks ./folder/file.md --stats

Total : 2
```

Caso 4 .- Ruta absoluta de un archivo sin opciones
Esta opción muestra los respectivos links dentro del archivo.

```
$ mdLinks /.../dir/file1.md

[ { file: '/home/dir/file1.md',
 text: 'Leer un archivo',
 href:'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback'
 },
 { file: '/home/dir/file1.md' ,
 text: 'Leer un directorio',
 href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback'
 }
 { file: '/dir/.../file1.md' ,
 text: 'Nodejs',
 href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback']

```

Caso 5 .- Ruta absoluta de un archivo con el flag --validate.
Esta opción muestra los respectivos links que se encuentran dentro del archivo y los valida.

```
$ mdLinks /.../dir/file1.md --validate

[ { file: '/dir/.../file1.md',
 text: 'Leer un archivo',
 href:'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback' ,
 status: 'ok' },
 { file: '/dir/.../file1.md' ,
 text: 'Leer un directorio',
 href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback' ,
 status: 'ok' }]
  { file: '/dir/.../file1.md' ,
 text: 'Nodejs',
 href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback' ,
 status: 'ok' }]
```

Caso 6 .- Ruta absoluta de un archivo con el flag --stats
Este flag muestra el total de los links que se encuentran dentro del archivo.

```
$ mdLinks /.../dir/file1.md --stats

Total:12

```

Caso 7 .- Ruta absoluta de un directorio sin opciones
Esta opción muestra los respectivos links que se encuentran dentro de los archivos Markdown ubicados en el directorio.

```
$ mdLinks /.../dir/

[ { file: '/dir/.../file1.md',
text: 'Leer un archivo',
href:'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback' ,
status: 'ok' },
{ file: '/dir/.../file2.md' ,
text: 'Leer un directorio',
href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback' ,
status: 'ok' }]
 { file: '/dir/.../file3.md' ,
text: 'Nodejs',
href:'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback' ,
status: 'ok' }]
```

## Checklist

### General

- [x] Puede instalarse via `npm install`

### `README.md`

- Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
- Un board con el backlog para la implementación de la librería.
- [x] Documentación técnica de la librería.
- [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [x] El módulo exporta una función con la interfaz (API) esperada.
- [x] Implementa soporte para archivo individual
- [x] Implementa soporte para directorios
- [x] Implementa `options.validate`

### Pruebas / tests

- Pruebas unitarias cubren un mínimo del 70% de statements, functions, lines, y branches.
- Pasa tests (y linters) (`npm test`).

### CLI

- [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [x] Se ejecuta sin errores / output esperado
- [x] Implementa `--validate`
- [x] Implementa `--stats`

## Hacker Edition

- Integración continua con Travis o Circle CI.
