![alt text](https://raw.githubusercontent.com/milanmilosev/nunjucks-starter-pack/master/app/img/nunjucks.jpg)

# nunjucks-starter-pack
Easily modify multiple HTML files from one place.
Use this document as a way to quickly start any new project.

[View the demo](https://milanmilosev.com/projects/nunjucks-starter-pack/)


## Getting Started / Installation

- Download and unzip: https://github.com/milanmilosev/nunjucks-starter-pack/archive/master.zip
- Install dependencies: ` npm `
- Run command ` gulp `

## Production
- Run command ` gulp prod `

## Features
- Gulp.js
- SASS compiler
- CSS minify
- Nunjucks render
- Static Server + watching scss/html/njk files
- Bootstrap 4

## Structure 
- The `src` directory contains development code.
- Compiled code for production can be found in the `dist` directory. 
  (dist directory will be automatically created after running the command 'gulp prod' )

```bash
.
├── app/
|   ├── css/
|   ├── img/
|   └── pages/
|   |   ├── index.njk
|   |   ├── burger-1.njk
|   |   ├── burger-2.njk
|   |   ├── burger-3.njk
|   |   └── burger-4.njk
|   ├── scss/
|   └── templates/
|       ├── layout-home-page.njk
|       └── layout-burger-page.njk
|          └── partials/
|               ├── head.njk
|               ├── nav.njk
|               ├── content.njk
|               ├── content-for-burger.njk
|               └── footer.njk
|
|
└── dist/
    ├── index.html
    ├── burger-1.html
    ├── burger-2.html
    ├── burger-3.html
    ├── burger-4.html
    ├── css/
    └── img/
```

Example how to set the page title and heading from parent.
![alt text](https://raw.githubusercontent.com/milanmilosev/nunjucks-starter-pack/master/app/img/changing%20the%20page%20title.gif)

## For more information
- Nunjucks by Mozilla official docs: https://mozilla.github.io/nunjucks
- Nunjucks template syntax definition for VS Code https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks

