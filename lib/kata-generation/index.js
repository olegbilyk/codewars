const { httpGet, generateComment, createFile } = require('./helpers');

const kataId = process.argv[2];
const language = process.argv[3] || 'javascript';
const isMyKata = process.argv[4];

if (!kataId) {
  console.error('Empty kata id');
}

async function generateKata(url, language, isMyKata) {
  console.log('Start generate kata');
  let kata;

  try {
    kata = await httpGet(`https://www.codewars.com/api/v1/code-challenges/${kataId}`);
    kata = JSON.parse(kata);

    if (kata.reason) {
      throw new Error(`Kata is ${kata.reason}`);
    }

    const comment = generateComment(kata);

    await createFile(kata, language, comment, isMyKata);
  } catch (error) {
    console.error(error.message);
  }

  console.log('End generate kata');

  return kata;
}

console.log(generateKata(`https://www.codewars.com/api/v1/code-challenges/${kataId}`, language, isMyKata));
