let string = 'The revolution will not be televised.'; // we need quotes to create strings
let otherString = "What a quote." // Double-quote works as well.
// for quotes choose one type and stick with it. If you need the character escape it.
otherString = "\"What a quote.\"" // This will work.

// As we learned with numbers we can concatenate strings:
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
console.log(joined);

// Getting user Input
let name = prompt('What is your name?');
console.log(name);

// Temperal literals
// these start with ticks and help with concatenantion as they allow a niceer syntax;
let song = `Flight of the youth`;
let iLike = `I like the song ${song}`;
console.log(iLike);
// You could even put complex math or stuff into these strings.

// If you want to split a string over multiple lines you can use \n
let newLineString = "This string is \nsplit over multiple lines."
console.log(newLineString);

// We can get the length of a string.
let text = 'This is some nice text.';
let textLength = text.length;
console.log(textLength);

// We can also check at which position a certain piece of text appears in a string
let pos = text.indexOf('nice'); // this will return the pos of first letter
console.log(pos);
// we can also check for the last index
let posLast = text.lastIndexOf("nice");
console.log(posLast);
// both will return -1 when they can't find the specified text;
// both also allow the input of a starting letter for the search:
let posOffsetStart = text.indexOf("nice", 5);
console.log(posOffsetStart);
// note: lastIndexOf searches from the end forwards.
// a less powerful version of indexOf() is search()


