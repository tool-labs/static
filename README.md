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
````
res/
  <resource_name>/
    <version>/
      <resource_file_1>
      <resource_file_2>
      <...>
````
  - You must update the `index.html` page that lists all available resources.
