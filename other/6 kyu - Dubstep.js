function songDecoder(song) {
  return song.split('WUB').filter(l => l).join(' ')
}

console.log(songDecoder("AWUBBWUBC"), "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C");
