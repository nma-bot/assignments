var foo = ['Tokyo', 'Honolulu', 'San Francisco'];

console.log(foo); // ['Tokyo', 'Honolulu', 'San Francisco']

console.log(foo[2]); // 'San Francisco'

console.log('foo length = ' + foo.length);

console.log('Last item in foo array is = ' + foo[foo.length - 1]);

// Add to end of array
foo.push('New York');
console.log(foo);

// Remove from end of Array
var last = foo.pop();

console.log('I removed ' + last + ' from the foo array');
console.log(foo);

// Add to beginning of array
foo.unshift('Sydney');
console.log(foo);

// Remove from beginning of array
var first = foo.shift();

console.log('I removed ' + first + ' from the foo array.');
console.log(foo);

// Find position of something in array
var pos = foo.indexOf('Honolulu');

console.log(foo[pos] + ' is currently at position #' + pos + ' of the foo array.');

// Remove from array by position
foo.splice(pos, 1);
console.log(foo);

// Copy (shallow copy)

var copy = foo.slice();

console.log('Show foo and copy arrays below: ');
console.log(foo);
console.log(copy);
