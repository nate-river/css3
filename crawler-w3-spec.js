"use strict";
var request = require('request');
var cheerio = require('cheerio');

request('https://www.w3.org/TR/css-lists-3/', function (err, res, body) {
  if (!err && res.statusCode === 200) {
    var $ = cheerio.load(body);
    $('.proptable.data tbody tr').each(function (i, v) {
      console.log($(v).find('a').text());
      $(v).find('td').each(function (i, v) {
        console.log($(v).text())
      })
    })
  }
});



var urls = [
  'http://www.w3.org/TR/css3-selectors',
  'http://www.w3.org/TR/css3-animations',
  'http://www.w3.org/TR/css-device-adapt',
  'http://www.w3.org/TR/css3-color',
  'http://www.w3.org/TR/css3-flexbox',
  'http://www.w3.org/TR/css3-background',
  'http://www.w3.org/TR/css3-images',
  'http://www.w3.org/TR/css4-images',
  'http://www.w3.org/TR/css3-speech',
  'http://www.w3.org/TR/css3-multicol',
  'http://www.w3.org/TR/css3-marquee',
  'http://www.w3.org/TR/css-text-decor-3',
  'http://www.w3.org/TR/css3-ui',
  'http://www.w3.org/TR/compositing-1',
  'http://www.w3.org/TR/css-masking',
  'http://www.w3.org/TR/css3-exclusions',
  'http://www.w3.org/TR/css3-regions',
  'http://www.w3.org/TR/filter-effects',
  'http://www.w3.org/TR/css3-align',
  'http://www.w3.org/TR/css-overflow-3',
  'http://www.w3.org/TR/css3-grid-layout',
  'http://www.w3.org/TR/css3-page',
  'http://www.w3.org/TR/css3-fonts',
  'http://www.w3.org/TR/css3-transitions',
  'http://www.w3.org/TR/css3-writing-modes',
  'http://www.w3.org/TR/css3-text',
  'http://www.w3.org/TR/css3-sizing',
  'http://www.w3.org/TR/css3-transforms',
  'http://www.w3.org/TR/css3-break',
  'http://www.w3.org/TR/css3-positioning',
  'http://www.w3.org/TR/css3-2d-transforms',
  'http://www.w3.org/TR/css3-layout',
  'http://www.w3.org/TR/css3-gcpm',
  'http://www.w3.org/TR/css3-ruby',
  'http://www.w3.org/TR/css3-lists',
  'http://www.w3.org/TR/css3-3d-transforms',
  'http://www.w3.org/TR/css3-box',
  'http://www.w3.org/TR/css3-hyperlinks',
  'http://www.w3.org/TR/css3-preslev',
  'http://www.w3.org/TR/css3-content',
  'http://www.w3.org/TR/css3-border',
  'http://www.w3.org/TR/css3-linebox'
];

// var exec = require('child_process').exec;
//
// urls.forEach(function(v){
//   // var tmp = v.split('/');
//   // var fileName = tmp[tmp.length-1] + '.html';
//   exec('wget -p ' + v, function (error, stdout, stderr) {
//     console.log(error, stdout, stderr);
//   });
// });
