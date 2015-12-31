//console.log('yo!');
var el     = document.querySelectorAll('#title')[0];
var parent = el.parentNode; // This will grab the immediate parent element of `el`

console.log(el);
console.log(parent);

el.style.borderColor = 'red';
el.style.borderStyle = 'solid';
el.style.borderWidth = '1px';
