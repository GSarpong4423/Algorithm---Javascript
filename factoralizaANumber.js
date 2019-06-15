function factorialize(num) {
  var interger = num;
//   this is if the interger is compared to zero then return 1. If not run the for loop
  if(interger == 0){
  return 1;
  } 
  else {
  //I initialize i to 1 because i need to start off at 5
  for (var i = 1; i < interger; i++) {
    num=num*i;
  }
  }
  return num;
}

console.log(factorialize(5));