# Electron with PHP

---
Make desktop application using Electron and PHP.

<p>
    <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://badgen.net/badge/license/apache-2.0/23BCCB" /></a>
</p>

### Requirements
 * **Node 9.0.0** or higher

### Setup
 * Run `npm install` in the root directory
 * To start the application run `npm start`

### PHP
 * **PHP 8.2** is included, you can replace the php folder with your desired php version.

**!Important** - In the php.ini it is necessary to have the `extension_dir = "ext"` **uncommented**, otherwise it will load the extension from the location you have installed PHP locally

### Communication between electron main thread and PHP
As of now, you can not access function that will help you trigger events on the main thread.<br>
You can still use javascript though.