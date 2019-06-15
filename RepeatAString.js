function repeat(string, repNum) {
    
    if(repNum < 0) {
        return "";
    }
    
    var returnString = "";
    
    for (let i = 0; i< repNum; i++) {
    returnString+=string;
    }
    
    return returnString;
}

console.log(repeat("Arnell", 7));