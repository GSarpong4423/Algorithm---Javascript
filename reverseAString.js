function reverseString(str) {
    var splitAString = str.split("");
    splitAString = splitAString.reverse();
    str = splitAString.join("");
    return str;

}

console.log(reverseString("hello"));