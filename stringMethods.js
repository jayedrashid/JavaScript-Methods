// *** String Methods ***



// 1. startsWith()
// Check if string starts with specified character(s).
// const str = 'JavaScript is amazing';

// console.log(str.startsWith('JavaScript'));  // true
// console.log(str.startsWith('Java'));        // true
// console.log(str.startsWith('javascript'));  // false

// // position is optional. If not specified, the default value is 0
// console.log(str.startsWith('Script', 4));   // true
// console.log(str.startsWith('SCRIPT', 4));   // false





// 2. endsWith()
// Check if string ends with specified character(s).
// const str = 'JavaScript is amazing';

// // check if ends with 'amazing'
// console.log(str.endsWith('amazing'));   // true
// console.log(str.endsWith('ing'));       // true
// console.log(str.endsWith('Amazing'));   // false

// // length is optional
// // if not specified, the default value is length of the string
// console.log(str.endsWith('is', 13));    // true
// console.log(str.endsWith('i', 13));     // false
// console.log(str.endsWith('s', 13));     // true





// 3. includes()

// Check if string contains specified character(s).
// const str = 'JavaScript is amazing';

// console.log(str.includes('Script'));    // true
// console.log(str.includes('script'));    // false
// console.log(str.includes(' '));         // true
// console.log(str.includes('array'));     // false



// 4. slice()

// Copy some part of string without modifying the original one.
// const str = 'JavaScript is amazing';

// // Default start index is 0
// console.log(str.slice());    // 'JavaScript is amazing'

// // start copy at index 4
// console.log(str.slice(4));   // 'Script is amazing'

// // end copy at index 10(character at this index will not be included)
// console.log(str.slice(0, 10));   // 'JavaScript'




// 5. toUpperCase()

// Convert string into upper case.
// const str = 'JavaScript is amazing';

// console.log(str.toUpperCase());  // 'JAVASCRIPT IS AMAZING'



// 6. toLowerCase()

// Convert string into lower case.
// const str = 'JavaScript is amazing';

// console.log(str.toLowerCase());  // 'javascript is amazing'





// 7. charAt()

// Return character at specified position.
// const str = 'JavaScript is amazing';

// console.log(str.charAt());       // 'J'
// console.log(str.charAt(11));     // 'i'
// console.log(str.charAt(14));     // 'a'
// console.log(str.charAt(110));    // ''





// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// // "The character at index 4 is q"




// 8. split()

// ** Returns Array **
// Split string into array of substrings.
// const str = 'JavaScript is amazing';
// const strNew = 'JavaScript-is-amazing';

// console.log(str.split());           // ["JavaScript is amazing"]

// // Separator string used to determine where to make each split
// console.log(str.split('S'));        // ["Java", "cript is amazing"]
// console.log(str.split('is'));       // ["JavaScript ", " amazing"]
// console.log(str.split(' '));        // ["JavaScript", "is", "amazing"]
// console.log(strNew.split('-'));     // ["JavaScript", "is", "amazing"]




// ** Returns String **
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);      // "fox"
// console.log(words[8]);      // "dog."

// const chars = str.split('');
// console.log(chars[16]);         // "f"




// 9. replace()

// Replaces specified value with another value in a string.
// const str = 'JavaScript is amazing';

// console.log(str.replace('JavaScript', 'Node.js'));      // 'Node.js is amazing'

// // replace() method is case sensitive. So replace will not work
// console.log(str.replace('Javascript', 'Node.js'));      // 'JavaScript is amazing'

// // replace() method replaces only the first match
// console.log(str.replace('a', 'A'));                     // 'JAvaScript is amazing'

// // use regular expression for case insensitive
// console.log(str.replace(/Javascript/i, 'Node.js'));         // 'Node.js is amazing'

// // to replace all matches, use regular expression
// console.log(str.replace(/a/g, 'A'));                        // 'JAvAScript is AmAzing'




// 10. repeat()

// Return new string with specified number of copies of existing string.
// const str = 'JavaScript';

// console.log(str.repeat(3)); // 'JavaScriptJavaScriptJavaScript'
// console.log(str.repeat(1)); // 'JavaScript'
// console.log(str.repeat(0)); // ''




// const echo = 'I\'m happy! ';

// console.log(`Listen: ${echo.repeat(3)}`);

// //  "Listen: I'm happy! I'm happy! I'm happy!"




// 11. indexOf()
// Returns the index number or position of first occurrence of a string.

// let text = "alpha beta gamma";

// console.log(text.indexOf("gamma"));   // 11     // index 11
// console.log(text.indexOf("alpha"));   // 0      // index 0 means first alpha position
// console.log(text.indexOf("sigma"));   // -1     // index -1 means no string matched





// 12. lastIndexOf()
// Returns the last occurrence of a string.

// let text = "alpha alpha alpha beta gamma beta";

// console.log(text.lastIndexOf("alpha"));   // 12      // index 12 means last alpha position
// console.log(text.lastIndexOf("beta", 29));   // 12      // index 12 means last alpha position







