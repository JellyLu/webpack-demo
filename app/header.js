const config = require('./config.json');

module.exports = function() {
  var header = document.createElement('div');
  header.textContent = config.message;
  return header;
};
