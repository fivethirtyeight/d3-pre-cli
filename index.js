#!/usr/bin/env node
var render = require('d3-pre-renderer');

var args = process.argv.slice(2);

if(!args.length) {
  console.log('must supply an html file');
}


render({
  inputFile: args[0]
});
