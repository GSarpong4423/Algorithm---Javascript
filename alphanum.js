var alphabet = ["a", "b", "c", "d", "e", "f", "g"];
var numbers = [1,2,3,4,5,6,7];
var numbers2 = numbers;
var alphaSLice = alphabet.slice(2,5); // equals to [c,d,e]

for (var i = alphaSLice.length -1; i > -1; i--) {
    numbers2.splice(2,0, alphaSLice[i]);
}

console.log(numbers2);