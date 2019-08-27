// http://www.codewars.com/kata/build-a-trie/train/javascript
function buildTrie(...words) {
  let trie = {};

  for (let word of words) {
    let node = trie;
    let str = "";
    for (let char of word) {
      str += char;
      node[str] = node[str] || (str === word ? null : {});
      node = node[str];
    }
  }

  return trie;
}

// console.log(buildTrie(), {})
// console.log(buildTrie(''), {})
// console.log(buildTrie('trie'), { t: { tr: { tri: { trie: null } } } })
// console.log(buildTrie("tree"), "---", { t: { tr: { tre: { tree: null } } } });
console.log(buildTrie("trie", "trie"), "---", {
  t: { tr: { tri: { trie: null } } }
});
// console.log(
//   buildTrie("A", "to", "tea", "ted", "ten", "i", "in", "inn"),
//   "---",
//   {
//     A: null,
//     t: { to: null, te: { tea: null, ted: null, ten: null } },
//     i: { in: { inn: null } }
//   }
// );
// console.log(buildTrie('true', 'trust'), { t: { tr: { tru: { true: null, trus: { trust: null } } } } })
