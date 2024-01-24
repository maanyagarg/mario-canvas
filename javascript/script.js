// Higher Order Functions => functions which either accept a function as a parameter or return function as a parameter
// forEach and setTimeout() function is a higher order function
// Array.array.forEach(function () {});

// Constructor function
// function Constructor(color) {
//   this.width = 12;
//   this.height = 12;
//   this.color = color;
//   this.taste = "sugar";
// }

// var biscuit = new Constructor("purple");
// console.log(biscuit);

// First Class Functions - A language is said to have first class functions when the functions in that language are treated as normal values or like variables, you can save them, pass them as arguments to another functions
// var firstClass = function abc() {};

// function fgh(val){

// }
// fgh(function(){

// })

// iife - immediately involked function expression
// iife -
// var ans = (function abc() {
//   var a = 12;
//   return {
//     getter: function () {
//       console.log(a);
//     },
//     setter: function (val) {
//       a = val;
//     },
//   };
// })();

// console.log(ans.getter());
// console.log(ans.setter(13));
// console.log(ans.getter());

// prototype - the properties js provides to all the objects by default on formation
// prototype inheritance - inherting properties of an object is done using prototype inheritance
// var rectangle = {
//   length: 0,
//   breadth: 0,
// };

// var area = {
//   area: 20,
//   conversion: "yards",
// };

// rectangle.__proto__ = area;
