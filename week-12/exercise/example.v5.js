var carElement = document.querySelectorAll('.car')[0];

// Create an empty object
var car = {};

// Store some things as properties
car.wheels = 4;
car.doors = 2;
car.sound = 'vroom';
car.name = 'Lightning McQueen';

// Log object
console.log( car );

// Store object in localStorage
localStorage.setItem( 'car', JSON.stringify(car) );

// Log localStorage object (hint, it's not an object anymore)
console.log( JSON.parse(localStorage.getItem( 'car' )) );
