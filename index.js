#!/usr/bin/env node
var fs = require('fs');
var render = require('d3-pre-renderer');

var args = process.argv.slice(2);

if (!args.length) {
  console.log('must supply an html file');
}

render({inputFile: args[0]}, function (err, output) {
  if (err) {
    console.log(err);
    return;
  }

  fs.writeFile(args[0], output, function (err) {
    if (err) {
      console.log('error saving document', err);
    } else {
      console.log('The file was saved!');
    }
  });
});
