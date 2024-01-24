var canvas = document.querySelector("canvas");
console.log(canvas);

var context = canvas.getContext("2d");
console.log(context);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// // rectangle
// context.fillStyle = "rgb(20,0,100,0.5)";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "rgb(200,0,100,0.5)";
// context.fillRect(200, 200, 100, 100);
// context.fillStyle = "rgb(0,80,100,0.5)";
// context.fillRect(300, 300, 100, 100);

// // line
// context.strokeStyle = "rgb(0,100,255, 0.3)";
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(400, 400);
// context.stroke();

// // for loop
// for (var i = 0; i < 1000; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   context.strokeStyle = "black";
//   context.beginPath();
//   context.arc(x, y, 10, (Math.PI = 2), (Math.PI = -1), false);
//   context.stroke();
// }
