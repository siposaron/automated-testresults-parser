const parser = require("./parsers");

function parse(options) {
  return parser.parse(options);
}

function parseString(options) {
  return parser.parseString(options);
}

async function parseFromUrl(options) {
  return await parser.parseFromUrl(options);
}

module.exports = {
  parse,
  parseString,
  parseFromUrl,
};
