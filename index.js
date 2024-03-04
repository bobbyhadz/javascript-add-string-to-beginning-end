// EXAMPLE 1 - Add a String to the beginning and end of another String

const str = 'ello worl';

const result = 'h' + str + 'd';

// 👇️ "hello world"
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using a template literal

// const str = 'ello worl';

// const result = `h${str}d`;

// // 👇️ "hello world"
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using `Array.join()`

// const prefix = 'h';
// const suffix = 'd';

// const str = 'ello worl';

// const result = [prefix, str, suffix].join('');
// console.log(result); // 👉️ hello world

// ------------------------------------------------------------------

// // EXAMPLE 4 - Append a string to the end of another string

// const str = 'bobby ';

// const result = str.concat('hadz');
// console.log(result); // 👉️ "bobby hadz"
