static
======

Static resources for Wikimedia Tool Labs.

[![Build Status](https://travis-ci.org/tool-labs/static.svg?branch=master)](https://travis-ci.org/tool-labs/static)

## Resource types

At the moment, `static` provides CSS and JS libraries, fonts and icons.

## Adding resources

If you want to add a resource to `static`, please open a pull request.  Please be aware of the following requirements:
  - The resource must be free software as [definied by the FSFE](https://fsfe.org/about/basics/freesoftware.de.html).
  - You must add the resource’s files to the `res` directory using the following directory structure:
```
res/
  <package>/
    index.json
    <version>/
      index.json
      <file_1>
      <file_2>
      <...>
```
  - If you are adding a new package to `static`, you have to create the file `res/<package>/index.json` with these entries:
    - `title` (required): the name of this package
    - `description` (optional): a plain text description for this package
    - `homepage` (optional): a URL pointing to the homepage of this package
  - You have to create the file `res/<package>/<version>/index.json` with these entries:
    - `license` (required): the name of the license of this package
    - `license-file` (required): the path to the license file of this package
    - `files` (only if applicable): a list of the most important files in this package
    - `fonts` (only if applicable): the fonts provided by this package and the corresponding files

### Example `index.json` for a package
`res/bootstrap/index.json`
```json
{
  "title": "Bootstrap",
  "description": "HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components and optional JavaScript extensions",
  "homepage": "http://getbootstrap.com/"
}
```

### Example `index.json` for a package version
`res/bootstrap/3.2.0/index.json`
```json
{
  "license": "MIT license",
  "license-file": "LICENSE",
  "files": [
    "css/bootstrap.min.css",
    "js/bootstrap.min.js"
  ],
  "fonts": {
    "Glyphicons": {
      "eot": "fonts/glyphicons-halflings-regular.eot",
      "svg": "fonts/glyphicons-halflings-regular.svg",
      "ttf": "fonts/glyphicons-halflings-regular.ttf",
      "woff": "fonts/glyphicons-halflings-regular.woff"
    }
  }
}
```
