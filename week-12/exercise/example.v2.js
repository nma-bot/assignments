// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    myName = "John Doe";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // Returns 60

// A nested function example
function getScore () {
  var num1 = 2,
      num2 = 3;

  // function add() {
  //
  // }

  return myName + " scored " + (num1 + num2);
}

console.loggetScore(); // Returns "John Doe scored 5"





























// var students = [];

// var students = {
// 	Sam: false,
// 	Sasha: true,
// 	Hyela: true,
// 	Volha: true,
// 	Myoung: true,
// 	Mayu: false,
// 	Yosh: true,
// 	Mark: true,
// 	Jae: true,
// 	Kalena: true
// };


// for (var i in students) {
//   var property = i;
//   var value = students[property];
//
//   console.log(property + ': ' + value);
// }







// function multiply(num1, num2) {
//   var result = num1 * num2;
//   console.log(result);
// }
//
// multiply(8, 5);
// multiply(12, 5);
// multiply(15, 5);
// multiply(8, 75);
// multiply(8, 55);
// multiply(48, 5);
// multiply(28, 5);
// multiply(8, 55);
