/*
  Title:
    Text align justify

  Description:
    Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

    Here are the rules:

    Use spaces to fill in the gaps between words.
    Each line should contain as many words as possible.
    Use '\n' to separate lines.
    Gap between words can't differ by more than one space.
    Lines should end with a word not a space.
    '\n' is not included in the length of a line.
    Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
    Last line should not be justified, use only one space between words.
    Last line should not contain '\n'
    Strings with one word do not need gaps ('somelongword\n').
    Example with width=30:

    Lorem  ipsum  dolor  sit amet,
    consectetur  adipiscing  elit.
    Vestibulum    sagittis   dolor
    mauris,  at  elementum  ligula
    tempor  eget.  In quis rhoncus
    nunc,  at  aliquet orci. Fusce
    at   dolor   sit   amet  felis
    suscipit   tristique.   Nam  a
    imperdiet   tellus.  Nulla  eu
    vestibulum    urna.    Vivamus
    tincidunt  suscipit  enim, nec
    ultrices   nisi  volutpat  ac.
    Maecenas   sit   amet  lacinia
    arcu,  non dictum justo. Donec
    sed  quam  vel  risus faucibus
    euismod.  Suspendisse  rhoncus
    rhoncus  felis  at  fermentum.
    Donec lorem magna, ultricies a
    nunc    sit    amet,   blandit
    fringilla  nunc. In vestibulum
    velit    ac    felis   rhoncus
    pellentesque. Mauris at tellus
    enim.  Aliquam eleifend tempus
    dapibus. Pellentesque commodo,
    nisi    sit   amet   hendrerit
    fringilla,   ante  odio  porta
    lacus,   ut   elementum  justo
    nulla et dolor.

    Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

    Have fun :)

  Kata Link:
    https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/text-align-justify/discuss

  Solutions Link:
    https://www.codewars.com/kata/text-align-justify/solutions

  Tags:
    #ALGORITHMS  #STRINGS #FORMATTING
*/

/**
 * @param {String} string - inital string
 * @param {Number} length - line length
 *
 * @return {String}
 */
function justify(string = '', length = 30) {
  let result = '';
  let str = string.replace(/\n/g, ' ');

  for (let index = length; index >= 0; index--) {
    if (str.length === 0) {
      break;
    }

    if ([' ', ''].includes(str.charAt(index))) {
      let line = '';
      const currStr = str.slice(0, index);
      str = str.slice(index + 1);

      if (currStr.length === length || str.length === 0) {
        line = currStr;
      } else {
        const words = currStr.split(' ');
        let allSpaceLength = length - currStr.length + words.length - 1;

        for (let wordIndex = 0, endWords = words.length; wordIndex < endWords; wordIndex++) {
          let spaceCount = Math.ceil(allSpaceLength / (endWords - wordIndex - 1));
          spaceCount = !Number.isNaN(spaceCount) && Number.isFinite(spaceCount) ? spaceCount : 0;

          line += words[wordIndex] + ' '.repeat(spaceCount);

          if (spaceCount > 0) {
            allSpaceLength -= spaceCount;
          } else {
            break;
          }
        }
      }

      result += `${line}\n`;
      index = length + 1;
    } else if (index === 1) {
      str = str.replace(/^\S+/, (match = '') => {
        result += `${match}`;
        return '';
      });
    }
  }

  return result.slice(0, -1);
}

const demo =
  'Lorem   ipsum  dolor\n' +
  'sit            amet,\n' +
  'consectetur\n' +
  'adipiscing     elit.\n' +
  'Vestibulum  sagittis\n' +
  'dolor   mauris,   at\n' +
  'elementum     ligula\n' +
  'tempor eget. In quis\n' +
  'rhoncus   nunc,   at\n' +
  'aliquet  orci. Fusce\n' +
  'at  dolor  sit  amet\n' +
  'felis       suscipit\n' +
  'tristique.   Nam   a\n' +
  'imperdiet    tellus.\n' +
  'Nulla  eu vestibulum\n' +
  'urna.        Vivamus\n' +
  'tincidunt   suscipit\n' +
  'enim,  nec  ultrices\n' +
  'nisi   volutpat  ac.\n' +
  'Maecenas   sit  amet\n' +
  'lacinia   arcu,  non\n' +
  'dictum  justo. Donec\n' +
  'sed  quam  vel risus\n' +
  'faucibus    euismod.\n' +
  'Suspendisse  rhoncus\n' +
  'rhoncus   felis   at\n' +
  'fermentum.     Donec\n' +
  'lorem         magna,\n' +
  'ultricies a nunc sit\n' +
  'amet,        blandit\n' +
  'fringilla  nunc.  In\n' +
  'vestibulum  velit ac\n' +
  'felis        rhoncus\n' +
  'pellentesque. Mauris\n' +
  'at    tellus   enim.\n' +
  'Aliquam     eleifend\n' +
  'tempus      dapibus.\n' +
  'Pellentesque\n' +
  'commodo,   nisi  sit\n' +
  'amet       hendrerit\n' +
  'fringilla, ante odio\n' +
  'porta    lacus,   ut\n' +
  'elementum      justo\n' +
  'nulla et dolor.';

console.log(
  'TEST =',
  justify(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.',
    20,
  ) === demo,
);

console.log('----- DEMO -----', demo);

console.log(
  justify(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.',
    1,
  ),
);

console.log(
  justify(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.',
    20,
  ),
);
