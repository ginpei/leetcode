const path = require('path');
const { readFile } = require('fs');

/**
 * @param  {...string} paths
 * @returns {Promise<any>}
 */
function readJson(...paths) {
  return new Promise((resolve, reject) => {
    readFile(path.join(...paths), 'utf8', (fileError, json) => {
      if (fileError) {
        reject(fileError);
        return;
      }

      try {
        const input = JSON.parse(json);
        resolve(input);
      } catch (jsonError) {
        reject(jsonError);
      }
    });
  });
}

module.exports.readJson = readJson;
