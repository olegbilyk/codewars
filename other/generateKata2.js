const fields = {
  id: '5c75a9ac1075d600129986fc',
  name: 'Making plain objects iterable ',
  slug: 'making-plain-objects-iterable',
  category: 'reference',
  publishedAt: '2019-03-08T13:05:46.485Z',
  approvedAt: null,
  languages: ['javascript'],
  url: 'https://www.codewars.com/kata/making-plain-objects-iterable',
  rank: {
    id: null,
    name: null,
    color: null,
  },
  createdAt: '2019-02-26T21:03:40.790Z',
  createdBy: {
    username: 'OlegBilykPro',
    url: 'https://www.codewars.com/users/OlegBilykPro',
  },
  description: '# Task ### Making plain objects iterable',
  totalAttempts: 1,
  totalCompleted: 2,
  totalStars: 1,
  voteScore: -1,
  tags: ['Fundamentals', 'Basic Language Features', 'Arrays', 'Data Types', 'Objects'],
  contributorsWanted: true,
  unresolved: {
    issues: 0,
    suggestions: 0,
  },
};

const fields2 = {
  id: '5c743cec901022438549964a',
  name: 'Create iterator',
  slug: 'create-iterator',
  category: 'reference',
  publishedAt: '2019-02-25T22:57:18.175Z',
  approvedAt: '2019-03-08T11:12:02.901Z',
  languages: ['javascript'],
  url: 'https://www.codewars.com/kata/create-iterator',
  rank: {
    id: -6,
    name: '6 kyu',
    color: 'yellow',
  },
  createdAt: '2019-02-25T19:07:24.384Z',
  createdBy: {
    username: 'OlegBilykPro',
    url: 'https://www.codewars.com/users/OlegBilykPro',
  },
  approvedBy: {
    username: 'FArekkusu',
    url: 'https://www.codewars.com/users/FArekkusu',
  },
  description:
    "# Task Implement an `iterator` which receives an array of values, and returns an object with: * a function `next` * a number `index` A call to the `next` function should return an object with 2 attributes: * `value` (the next value in the input array; `undefined` if the value is not present or the array has been fully processed) * `done` (boolean which specifies whether the input array has been fully processed) Accessing the `index` attribute should return the index of the value currently held by the `iterator`. ___ ## Example: ``` const iterator = createIterator(['One', , 'Two']); iterator.index  // 0 iterator.next() // { value: 'One', done: false } iterator.index  // 1    // A hole in the array - value is undefined iterator.next() // { value: undefined, done: false } iterator.index  // 2 iterator.next() // { value: 'Two', done: false } iterator.index  // 3 // Iteration has finished - value is undefined, done becomes true iterator.next() // { value: undefined, done: true } iterator.index  // 3 // Subsequent calls to next of a fully processed iterator don't change anything iterator.next() // { value: undefined, done: true } iterator.index  // 3 ```",
  totalAttempts: 112,
  totalCompleted: 20,
  totalStars: 3,
  voteScore: 35,
  tags: ['Fundamentals', 'Basic Language Features', 'Arrays', 'Data Types'],
  contributorsWanted: true,
  unresolved: {
    issues: 0,
    suggestions: 0,
  },
};

function generateComment({ name: title = '', description = '', url = '', tags = [], rank = {} }) {
  return `
/*
  Title:
    ${title}

  Description:
    ${description}

  Kata Link:
    ${url}

  Discuss Link:
    ${url}/discuss

  Solutions Link:
    ${url}/solutions

  Tags:
    ${tags.map(tag => `#${tag.toUpperCase()}`).join(', ')}
*/`;
}

function getFileType(lang) {
  switch (lang) {
    case 'javascript':
      return '.js';
    default:
      return '';
  }
}

function getPath({ name = '', rank = {} }, lang = 'javascript', isMyKata = false) {
  const folder = rank.id == null ? 'beta' : `${Math.abs(rank.id)}-kyu`;
  const fileName = `${name.trim()}${getFileType(lang)}`;

  return `${isMyKata ? 'my-katas' : `katas/${folder}`}/${fileName}`;
}

console.log(fields2);
console.log(generateComment(fields2));
console.log(getPath(fields));
console.log(getPath(fields2));
