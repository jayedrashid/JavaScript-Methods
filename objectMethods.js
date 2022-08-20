// *** Object Methods ***


// 1. Object.create()

// Creates a new object, using an existing object as the prototype of the newly created object.

// const person = {
//     isHuman: false,
//     hisIntro: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };

// const myself = Object.create(person);
// myself.name = 'Matthew'; // "name" is a property set on "myself", but not on "person"
// myself.isHuman = true; // inherited properties can be overwritten

// myself.hisIntro();     // "My name is Matthew. Am I human? true"




// We can create a job object instance, and extend it to a more specific object.

// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

//         console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
//     }
// };

// const barista = Object.create(job);     // Use Object.create to pass properties
// barista.position = "barista";

// barista.showDetails();      // The barista position is hourly and is accepting applications.




// Prototype object
// var person = {
//     city: 'London',
//     calculateAge: function() {
//         var currentYear = new Date().getFullYear();
//         var age = currentYear - this.yearOfBirth;
//         console.log(age);   // 32
//     }
// }

// var john = Object.create(person);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.occupation = 'Teacher';
// console.log(john);          // {}
// john.calculateAge();

// var mark = Object.create(person, {
//     name: { value: 'Mark'},
//     yearOfBirth: { value: 1990}
// });
// console.log(mark);          // 32
// mark.calculateAge();
// console.log(mark.city);     // London

// Object.create method accepts two arguments as:
// >> prototypeObject: Newly created object's prototype object.
// It has to be an object or null.
// >> propertiesObject: Properties of the new object.
// This argument is optional.




// 2. Object.keys()
// Returns an array containing the names of all of the given object's own enumerable string properties.

// const object1 = {
//     a: 'someString',
//     b: 42,
//     c: false
// };

// console.log(Object.keys(object1));      // ["a", "b", "c"]



// As Object.keys converts your object’s keys into an array of keys, the forEach() array method can be used to iterate through the keys and values.

// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
// };

// // Prints "name Jean-Luc Picard" followed by "rank Captain"
// Object.keys(obj).forEach(key => {
//     console.log(key, obj[key]);
// });

// // name Jean-Luc Picard
// // rank Captain



// 3. Object.values()
// Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
// };

// // Prints "Jean-Luc Picard" followed by "Captain"
// Object.values(obj).forEach(val => {
//     console.log(val);
// });

// // Jean-Luc Picard
// // Captain




// Creates an array containing the values of an object.

// const session = {
//     id: 1,
//     time: `26-July-2018`,
//     device: 'mobile',
//     browser: 'Chrome'
// };

// const values = Object.values(session);

// console.log(values);    // [ 1, '26-July-2018', 'mobile', 'Chrome' ]





// 4. Object.entries()
// Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
// };

// // Prints "name Jean-Luc Picard" followed by "rank Captain"
// Object.entries(obj).forEach(entry => {
//     const [key, value] = entry;
//     console.log(key, value);
// });
// // // name Jean-Luc Picard
// // // rank Captain




// Creates a nested array of the key/value pairs of an object.

// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source'
// };

// const entries = Object.entries(operatingSystem);

// console.log(entries);

// // [
// //     ['name', 'Ubuntu'],
// //     ['version', 18.04],
// //     ['license', 'Open Source']
// // ]




// Create an iterable object from the object
// const westeros = {
//     cersei: 'Lannister',
//     arty: 'Stark',
//     jon: 'Snow',
//     brienne: 'Tarth',
//     daenerys: 'Targaryen',
//     theon: 'Greyjoy',
//     jorah: 'Mormont',
//     margaery: 'Tyrell',
//     sandor: 'Clehene',
//     samwell: 'Tarly',
//     ramsay: 'Bolton'
// };

// let keys = Object.keys(westeros);
// console.log('Keys', keys);
// // Keys [ 'cersei','arty','jon','brienne','daenerys', 'theon','jorah','margaery','sandor','samwell','ramsay']

// let vals = Object.values(westeros);
// console.log('Vals', vals);
// // Vals ['Lannister', 'Stark','Snow','Tarth','Targaryen', 'Greyjoy','Mormont','Tyrell','Clehene','Tarly','Bolton']

// let entries = Object.entries(westeros);
// console.log('Entries', entries);
// // Entries [
// //     [ 'cersei', 'Lannister' ],
// //     [ 'arty', 'Stark' ],
// //     [ 'jon', 'Snow' ],
// //     [ 'brienne', 'Tarth' ],
// //     [ 'daenerys', 'Targaryen' ],
// //     [ 'theon', 'Greyjoy' ],
// //     [ 'jorah', 'Mormont' ],
// //     [ 'margaery', 'Tyrell' ],
// //     [ 'sandor', 'Clehene' ],
// //     [ 'samwell', 'Tarly' ],
// //     [ 'ramsay', 'Bolton' ]
// // ]
// console.log(entries[2][1]);     // Snow




// 5. Object.assign()
// Copies the values of all enumerable own properties from one or more source objects to a target object.

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);    // { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);    // { a: 1, b: 4, c: 5 }





// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the objects
// const character = Object.assign(name, details);

// console.log(character);

// // {
// //     firstName: 'Philip',
// //     lastName: 'Fry',
// //     job: 'Delivery Boy',
// //     employer: 'Planet Express'
// // }




// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the object with the spread operator
// const character = { ...name, ...details }

// console.log(character);

// // {
// //     firstName: 'Philip',
// //     lastName: 'Fry',
// //     job: 'Delivery Boy',
// //     employer: 'Planet Express'
// // }





// Object.assign(target, sources... ) method
// used to copy/merge objects 

// let obj1 = { 'arms': true, 'armCount': 2 };
// let obj2 = { 'weapons': ['missile launcher', 'chain gun'] };
// let obj3 = { 'carMove': true, 'legs': 0, 'treads': 2 };

// let arms = Object.assign({}, obj1);
// console.log(arms);
// // { arms: true, armCount: 2 }

// let arms = Object.assign({'hasHands': true}, obj1);
// console.log(arms);
// // { hasHands: true, arms: true, armCount: 2 }

// let arms = Object.assign({'hasHands': true, 'arms': false}, obj1);
// console.log(arms);
// // { hasHands: true, arms: true, armCount: 2 }

// let robot = Object.assign({}, obj1, obj2, obj3);
// console.log(robot);
// // {
// //     arms: true,
// //     armCount: 2,
// //     weapons: [ 'missile launcher', 'chain gun' ],
// //     carMove: true,
// //     legs: 0,
// //     treads: 2
// // }


// let robot = Object.assign({'hasHands': true, 'arms': false}, obj1, obj2, obj3);
// console.log(robot);
// // {
// //     hasHands: true,
// //     arms: true,
// //     armCount: 2,
// //     weapons: [ 'missile launcher', 'chain gun' ],
// //     carMove: true,
// //     legs: 0,
// //     treads: 2
// // }




// 6. Object.freeze()
// Freezes an object. Other code cannot delete or change its properties.
// prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.

// const user = {
// 	username: 'AzureDiamond',
// 	password: 'hunter2'
// };

// const newUser = Object.freeze(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);       

// // { username: 'AzureDiamond', password: 'hunter2' }






const config = {
    appName: 'roadMap.sh',
    database: {
        host: '127.0.0.1',
        name: 'roadMap',
        user: 'root',
        pwd: 'r$#9'
    }
};

// console.log(config);
// // {
// //     appName: 'roadMap.sh',
// //     database: { host: '127.0.0.1', name: 'roadMap', user: 'root', pwd: 'r$#9' }
// // }

// config.appName = 'xyz';
// console.log(config);
// // {
// //     appName: 'xyz',
// //     database: { host: '127.0.0.1', name: 'roadMap', user: 'root', pwd: 'r$#9' }
// // }

// Object.freeze(config);
// config.appName = 'roadMap2';    // freeze appName (top level) so not changed to roadMap2
// console.log(config);
// // {
// //     appName: 'roadMap.sh',
// //     database: { host: '127.0.0.1', name: 'roadMap', user: 'root', pwd: 'r$#9' }
// // }

// Object.freeze(config);
// config.database.name = 'roadMap2';    // can't freeze database.name (deep level) so it changed to roadMap2
// console.log(config);
// // {
// //     appName: 'roadMap.sh',
// //     database: { host: '127.0.0.1', name: 'roadMap2', user: 'root', pwd: 'r$#9' }
// // }

// Object.freeze(config.database);
// config.database.name = 'roadMap2';    // freeze database.name (top level) so not changed to roadMap2
// console.log(config);
// // {
// //     appName: 'roadMap.sh',
// //     database: { host: '127.0.0.1', name: 'roadMap', user: 'root', pwd: 'r$#9' }
// // }








