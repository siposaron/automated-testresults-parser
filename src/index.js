const parser = require('./parsers');

function parse(options) {
  return parser.parse(options);
}

async function parseFromUrl(options) {
  return await parser.parseFromUrl(options);
}

module.exports = {
  parse,
  parseFromUrl
}