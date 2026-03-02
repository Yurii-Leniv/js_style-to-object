'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const m = sourceString.split(';');

  for (let i = 0; i < m.length; i++) {
    if (m[i].trim() === '') {
      continue;
    }

    const parts = m[i].split(':');
    const key = parts[0].trim(parts[0]);
    const value = parts[1].trim(parts[1]);

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
