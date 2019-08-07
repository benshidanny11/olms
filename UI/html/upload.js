var fs = require('fs');

function getDestination (req, file, cb) {
  cb(null, '/dev/null');
}

function NullStorage (opts) {
  this.getDestination = (opts.destination || getDestination);
}

NullStorage.prototype._handleFile = function _handleFile (req, file, cb) {
  this.getDestination(req, file, function (err, path) {
    if (err) return cb(err);

    var outStream = fs.createWriteStream(path);

    file.stream.pipe(outStream);
    outStream.on('error', cb);
    outStream.on('finish', function () {
      cb(null, {
        path: path,
        size: outStream.bytesWritten
      });
    });
  });
}

NullStorage.prototype._removeFile = function _removeFile (req, file, cb) {
  fs.unlink(file.path, cb);
}

module.exports = function (opts) {
  return new NullStorage(opts);
}