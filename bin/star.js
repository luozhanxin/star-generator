#!/usr/bin/env node

var program = require("commander");
var os = require("os");
var fs = require("fs");
var path = require("path");
var readline = require("readline");

var _exit = process.exit;
var eol = os.EOL;
var pkg = require("../package.json");

var version = pkg.version;

process.exit = exit;

program
  .version(version)
  .usage("[options] [dir]")
  .option("-e, --ejs", "add ejs engine support (defaults to pug/jade)")
  .option("    --hbs", "add handlebars engine support")
  .option("-n, --nunjucks", "add nunjucks engine support")
  .option("-H, --hogan", "add hogan.js engine support")
  .option(
    "-c, --css <engine>",
    "add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)"
  )
  .option("    --git", "add .gitignore")
  .option("-f, --force", "force on non-empty directory")
  .parse(process.argv);

if (!exit.exited) {
  main();
}
