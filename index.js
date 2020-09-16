const path = require('path');

function basename(key, ext) {
  return path.posix.basename(key, ext);
}

function dirname(key) {
  return path.posix.dirname(key);
}

function extname(key) {
  return path.posix.extname(key);
}

function resolve(...paths) {
  const resolved = path.posix.resolve('/', ...paths);
  return resolved.slice(1);
}

module.exports = {
  basename,
  dirname,
  extname,
  resolve,
};
