// *** Array Methods ***

// 1. forEach()
// This method can help you to loop over array's items.
// const arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(item => {
//     console.log(item);
// });

// 1
// 2
// 3
// 4
// 5
// 6




// 2. includes()
// This method check if array includes the item passed in the method.
// const arr = [1, 2, 3, 4, 5, 6];

// const x1 = arr.includes(2);
// const x2 = arr.includes(7);

// console.log(x1);    // true
// console.log(x2);    // false




// 3. filter()
// This method create new array with only elements passed condition inside the provided function.
// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.filter(num => num > 3);

// console.log(newArr);      // [4, 5, 6]
// console.log(arr);           // [1, 2, 3, 4, 5, 6]




// to create a filtered array that has all elements with values less than 10 removed.

// function isBigEnough(value) {
//     return value >= 10
// }

// const arr = [12, 5, 8, 130, 44];

// const newArr = arr.filter(isBigEnough)

// console.log(newArr);      // [12, 130, 44]




// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);        // ["exuberant", "destruction", "present"]





// Find all prime numbers in an array
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]






// Filtering invalid entries from JSON
// Create a filtered JSON of all elements with non-zero, numeric id.

// let arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
// ]

// let invalidEntries = 0

// function filterByID(item) {
//     if (Number.isFinite(item.id) && item.id !== 0) {
//         return true
//     }
//     invalidEntries++
//     return false;
// }

// let arrByID = arr.filter(filterByID)

// console.log('Filtered Array\n', arrByID)
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log('Number of Invalid Entries = ', invalidEntries)
// // Number of Invalid Entries = 5



// Searching in array

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// function filterItems(arr, query) {
//     return arr.filter(function (el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
// }

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']





// Affecting Initial Array (modifying, appending and deleting)

// ** Modifying each word **
// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

// const modifiedWords = words.filter((word, index, arr) => {
//     arr[index + 1] += ' extra'
//     return word.length < 6
// })
// console.log(modifiedWords);      // ["spray"]
// Note: there are three words below length 6, but since they've been modified one is returned



// ** Appending new words **
// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const appendedWords = words.filter((word, index, arr) => {
//     arr.push('new')
//     return word.length < 6
// })
// console.log(appendedWords);     // ["spray" ,"limit" ,"elite"]
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6



// ** Deleting words **
// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const deleteWords = words.filter((word, index, arr) => {
//     arr.pop()
//     return word.length < 6
// })
// console.log(deleteWords);       // ["spray" ,"limit"]
// Notice 'elite' is not even obtained as it’s been popped off 'words' before filter can even get there







// 4. map()
// This method create new array by calling the provided function in every element.
// const arr = [1, 2, 3, 4, 5, 6];

// const oneAdded = arr.map(num => num + 1);

// console.log(oneAdded);      // [ 2, 3, 4, 5, 6, 7 ]
// console.log(arr);           // [ 1, 2, 3, 4, 5, 6 ]





// Mapping an array of numbers to an array of square roots

// const numbers = [1, 4, 9];

// const roots = numbers.map((num) => Math.sqrt(num));

// console.log(roots);     // [1, 2, 3]
// console.log(numbers);   // [1, 4, 9]





// Using map generically

// const map = Array.prototype.map;

// const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));

// console.log(charCodes);
// // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]




// 5. reduce()

// The reduce() method applies a function against an accumulator and each element in the array(from left to right) to reduce it to a single value - MDN
// const arr = [1, 2, 3, 4, 5, 6];

// const sum = arr.reduce((total, value) => total + value, 0);

// console.log(sum); // 21





// Return the sum of all the elements in an array:
// const arr = [1, 2, 3, 4];

// const sum = arr.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );

// console.log(sum);    // 10





// Flatten an array of arrays
// const arr = [[0, 1], [2, 3], [4, 5]];

// const flattened = arr.reduce(
//     (previousValue, currentValue) => previousValue.concat(currentValue),
//     [],
// );

// console.log(flattened);     // [0, 1, 2, 3, 4, 5]





// 6. some()
// This method check if at least one of array's item passed the condition. If passed, it return 'true' otherwise 'false'.
// const arr = [1, 2, 3, 4, 5, 6];

// const largeNum = arr.some(num => num > 4);      // at least one element is greater than 4?
// console.log(largeNum);      // true

// const smallNum = arr.some(num => num <= 0);     // // at least one element is less than or equal to 0?
// console.log(smallNum);      // false




// check if at least one of array's item is even
// const array = [1, 2, 3, 4, 5];

// const even = (element) => element % 2 === 0;    // checks whether an element is even

// console.log(array.some(even));  // true





// Checking whether a value exists 
// const fruits = ['apple', 'banana', 'mango', 'guava'];

// function isExists(arr, val) {
//     return arr.some((arrVal) => val === arrVal);
// }

// console.log(isExists(fruits, 'kela'));     // false
// console.log(isExists(fruits, 'banana'));   // true






// 7. every()

// This method check if all array's item passed the condition. If passed, it return 'true' otherwise 'false'.
// const arr = [1, 2, 3, 4, 5, 6];

// const greaterFour = arr.every(num => num > 4);  // all elements are greater than 4
// console.log(greaterFour);   // false

// const lessTen = arr.every(num => num < 10); // all elements are less than 10
// console.log(lessTen);   // true




// Check if one array is a subset of another array
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [5, 7, 6];
// const arr3 = [5, 8, 7];
// const isSubset = (arr1, arr2) => arr2.every((element) => arr1.includes(element));

// console.log(isSubset(arr1, arr2)); // true
// console.log(isSubset(arr1, arr3)); // false







// 8. sort()

// This method used to arrange / sort array's item either ascending or descending order.
// const arr = [1, 2, 3, 4, 5, 6];
// const alpha = ['e', 'a', 'c', 'u', 'y'];

// // sort in descending order
// descOrder = arr.sort((a, b) => a > b ? -1 : 1);
// console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// // sort in ascending order
// ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
// console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']




// Arrange array's item in ascending order.
// const namesArr = ['Gamma', 'Beta', 'Alpha'];

// console.log(namesArr.sort());   // [ 'Alpha', 'Beta', 'Gamma' ]



// Arrange array's item in descending order.
// const namesArr = ['Alpha', 'Beta', 'Gamma'];

// console.log(namesArr.reverse());   // [ 'Gamma', 'Beta', 'Alpha' ]




// Arrange array's item in ascending order.
// const numArr = [74, 18, 10, 5, 84, 24, 105];

// function compareFunc (a, b) {
//     // 1. < 0 ... a comes first
//     // 2. 0 ... nothing will be changed
//     // 3. > 0 ... b comes first

//     return a - b;
// }

// console.log(numArr.sort(compareFunc));   // [ 5, 10, 18, 24, 74, 84, 105 ]




// Arrange object's item in descending order.
// const products = [
//     {
//         name: 'laptop',
//         price: 1000
//     },
//     {
//         name: 'desktop',
//         price: 1500
//     },
//     {
//         name: 'phone',
//         price: 500
//     }
// ];

// products.sort((a, b) => {
//     return b.price - a.price;
// });

// console.log(products);

// // [
// //     { name: 'desktop', price: 1500 },
// //     { name: 'laptop', price: 1000 },
// //     { name: 'phone', price: 500 }
// // ]








// 9. Array.from()

// This change all thing that are array - like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map, filter and so on.
// const name = 'frugence';
// const nameArray = Array.from(name);

// console.log(name); // output: frugence
// console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
// working with DOM
//   // I assume that you have created unorder list of items in our html file.

//   const lis = document.querySelectorAll('li');
// const lisArray = Array.from(document.querySelectorAll('li'));

// // is true array?
// console.log(Array.isArray(lis)); // output: false
// console.log(Array.isArray(lisArray));  // output: true



// 10. Array.of()

// This create array from every arguments passed into it.
// const num = Array.of(1, 2, 3, 4, 5, 6);
// console.log(num); // output: [1, 2, 3, 4, 5, 6]





// 11. find()
// It returns the value of the first element that passes a test.
// It returns undefined if no elements are found.
// It executes a function for each array element.


// Return the very first element that is more than 0
// const arr = [-10, -0.20, 0.30, 0.10, -40, -50];

// const found = arr.find(function (e) {
//     return e > 0;
// });

// console.log(found);     // 0.3



