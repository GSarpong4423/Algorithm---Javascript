function findLongestWordLength(str) {
  var eachWord = str.split(" ");
  var longestWord = 0;
  for(var i = 0; i < eachWord.length; i++){
      if ( eachWord[i].length > longestWord) {
          longestWord = eachWord[i].length;
      }
  }
 return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
