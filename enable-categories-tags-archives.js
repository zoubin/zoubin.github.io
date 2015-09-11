var fs = require('fs');
var exec = require('child_process').exec;

exec('hexo new page "all-categories"', function (err) {
  if (!err) {
    var file = fs.createWriteStream('source/all-categories/index.md');
    file.write('title: "all-categories"\n');
    file.write('layout: "all-categories"\n');
    file.end('---');
  }
});

exec('hexo new page "all-tags"', function (err) {
  if (!err) {
    var file = fs.createWriteStream('source/all-tags/index.md');
    file.write('title: "all-tags"\n');
    file.write('layout: "all-tags"\n');
    file.end('---');
  }
});

exec('hexo new page "all-archives"', function (err) {
  if (!err) {
    var file = fs.createWriteStream('source/all-archives/index.md');
    file.write('title: "all-archives"\n');
    file.write('layout: "all-archives"\n');
    file.end('---');
  }
});


