const https = require('https');
const path = require('path');
const fs = require('fs');

const httpGet = url =>
  new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let body = '';
        res.setEncoding('utf8');

        res.on('data', chunk => {
          body += chunk;
        });
        res.on('end', () => resolve(body));
      })
      .on('error', reject);
  });

function generateComment({ name: title = '', description = '', url = '', tags = [] }) {
  return `/*
  Title:
    ${title}

  Description:
    ${description.replace(/\n/g, '\n    ')}

  Kata Link:
    ${url}

  Discuss Link:
    ${url}/discuss

  Solutions Link:
    ${url}/solutions

  Tags:
    ${tags.map(tag => `#${tag.toUpperCase()}`).join(', ')}
*/
`;
}

function getFileType(language) {
  switch (language) {
    case 'javascript':
      return '.js';
    case 'typescript':
      return '.ts';
    default:
      return '';
  }
}

function getPath({ rank = {} }, isMyKata = false) {
  const folder = rank.id == null ? 'beta' : `${Math.abs(rank.id)}-kyu`;

  return `${isMyKata ? 'my-katas' : `katas/${folder}`}`;
}

function getFileName({ name = '' }, language = '') {
  return `${name.trim()}${getFileType(language)}`;
}

function createFile(kata, language = '', fileBody, isMyKata) {
  const filePath = getPath(kata, isMyKata);
  const fileName = getFileName(kata, language);

  try {
    fs.writeFileSync(path.join(filePath, fileName), fileBody);
    console.log(`File successfully created ${fileName} in ${filePath}`);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

module.exports = {
  httpGet,
  generateComment,
  getFileType,
  getPath,
  getFileName,
  createFile,
};
