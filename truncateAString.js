// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {

    var splitString = str.split("");
    var shortenedString = "";

    if (str.length > num ) {
      for (var i = 0; i < num; i++) {
        shortenedString = shortenedString + splitString[i];
      }
      shortenedString = shortenedString + "...";
      return shortenedString;
    }
    return str;
    
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


//ANOTHER WAY
// function truncateString(str, num) {
//     if (str.length > num) {
//         var truncString = "";
//         truncString = str.slice(0, (num)) + "...";
   
// return truncString;
// }
// return str;

// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));