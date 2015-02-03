var path = require('path');
var fs = require('fs');
var zlib = require('zlib');
var gunzip = zlib.createGunzip();

module.exports = function als2xml(file) {
  return fs.createReadStream(path.resolve(file))
    .pipe(gunzip)
    .pipe(process.stdout);
};
