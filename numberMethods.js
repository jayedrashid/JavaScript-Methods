// ============ Defining Methods ============
// Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).
// But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

// https://www.makeuseof.com/javascript-number-methods/



// 1. parseInt()
// The parseInt() method parses the given string argument and returns an integer number parsed from the string.

// let num1 = Number.parseInt("34");
// console.log(num1);       // 34
// let num2 = Number.parseInt("5324    ");
// console.log(num2);       // 5324
// let num3 = Number.parseInt("32.65");
// console.log(num3);       // 32


// If an integer can't be parsed from the given string, the method returns NaN.
// let num4 = Number.parseInt("Hello, World!");
// console.log(num4);       // NaN
// let num5 = Number.parseInt("...#@$$");
// console.log(num5);       // NaN





// 2. toString()
// The toString() method returns the given number in the form of a string. 
// This method accepts radix (the base in mathematical numeral systems) as an optional parameter and returns a string representing the specified Number object.

// let num1 = 213;
// console.log(num1.toString());        // 213
// let num2 = 25.56;
// console.log(num2.toString());        // 25.56
// let num3 = -673;
// console.log(num3.toString());        // -673
// let num4 = 15;
// // Base 2
// console.log(num4.toString(2));        // 1111





// 3. toExponential()
// The toExponential() method returns a string that represents the exponential notation of the given number. This method accepts fractionDigits as an optional parameter that specifies the number of digits after the decimal point.

// let num1 = 23425;
// console.log(num1.toExponential());       // 2.3425e+4
// let num2 = 342;
// console.log(num2.toExponential(2));       // 3.42e+2
// let num3 = 465500;
// console.log(num3.toExponential(4));       // 4.6550e+5
// let num4 = 886.456;
// console.log(num4.toExponential());       // 8.86456e+2
// let num5 = 0.34;
// console.log(num5.toExponential());       // 3.4e-1




// 4. toFixed()
// The toFixed() method returns a string that represents a number formatted using fixed-point notation. This method accepts an optional parameter that specifies the number of digits to appear after the decimal point. If no parameter is provided, the value of this parameter is treated as 0.
// This method rounds the string to a specified number of decimals.

// let num1 = 234.345;
// console.log(num1.toFixed(1));        // 234.3
// let num2 = -783.234;
// console.log(num2.toFixed(2));        // -783.23
// let num3 = 213;
// console.log(num3.toFixed(4));        // 213.0000
// let num4 = 345.23;
// console.log(num4.toFixed());         // 345
// let num5 = 785.123;
// console.log(num5.toFixed(0));        // 785





// 5. toPrecision()
// The toPrecision() method returns a string representing the number to the specified precision. This method accepts an optional parameter that specifies the number of significant digits.
// This method formats a number to a specified length

// let num1 = 234.345;
// console.log(num1.toPrecision(4));        // 234.3
// let num2 = -783.234;
// console.log(num2.toPrecision(5));        // -783.23
// let num3 = 213;
// console.log(num3.toPrecision(4));        // 213.0
// let num4 = 345.23;
// console.log(num4.toPrecision(3));        // 345
// let num5 = 785.123;
// console.log(num5.toPrecision(5));        // 785.12





// 6. valueOf()
// The valueOf() method returns the primitive value of a Number object.

// let num1 = 234.345;
// console.log(num1.valueOf());         // 234.345
// let num2 = -783.234;
// console.log(num2.valueOf());         // -783.234
// console.log((327).valueOf());        // 327
// console.log((25+25).valueOf());      // 50
// console.log((0.003).valueOf());      // 0.003





// 7. toLocaleString()
// The JavaScript toLocaleString() method returns a string with a language-sensitive representation of a number.
// This method returns a Date object as a string, using locale settings.

// let num = 762359.237;
// // Indian
// console.log(num.toLocaleString('en-IN'));        // 7,62,359.237
// // Chinese
// console.log(num.toLocaleString('zh-Hans-CN-u-nu-hanidec'));      // 七六二,三五九.二三七
// // German
// console.log(num.toLocaleString('de-DE'));        // 762.359,237






// 8. parseFloat()
// The parseInt() method parses the given string argument and returns a floating-point number parsed from the string.
// parses a value as a string and returns the first number

// let num1 = Number.parseFloat("34.235");
// console.log(num1);       // 34.235
// let num2 = Number.parseFloat(" 5324.45    ");
// console.log(num2);       // 5324.45
// let num3 = Number.parseFloat("32.65");
// console.log(num3);       // 32.65
// let num4 = Number.parseFloat("2 Welcome MUO");
// console.log(num4);       // 2


// If a number can't be parsed from the given string, the method returns NaN.

// let num5 = Number.parseFloat("Welcome 2 MUO"); 
// console.log(num5);       // NaN
// let num6 = Number.parseFloat("#$^$^"); 
// console.log(num6);       // NaN






// 9. isInteger()
// The isInteger() method checks whether the passed value is an integer. This method returns a Boolean value (true or false) that indicates whether the given value is an integer or not.
// This method returns true if a value is an integer of the datatype Number. Otherwise it returns false.

// let num1 = 45;
// console.log(Number.isInteger(num1));     // true
// let num2 = 0;
// console.log(Number.isInteger(num2));     // true
// let num3 = 1;
// console.log(Number.isInteger(num3));     // true
// let num4 = 0.8;
// console.log(Number.isInteger(num4));     // false
// let num5 = 8.0;
// console.log(Number.isInteger(num5));     // true
// let num6 = Infinity;
// console.log(Number.isInteger(num6));     // false
// let num7 = NaN;
// console.log(Number.isInteger(num7));     // false
// let num8 = [1, 2, 3];
// console.log(Number.isInteger(num8));     // false
// let num9 = "45";
// console.log(Number.isInteger(num9));     // false
// let num10 = true;
// console.log(Number.isInteger(num10));    // false






// 10. isFinite()
// The isFinite() method checks whether the passed value is a finite number. This method returns a Boolean value (true or false) that indicates whether the given value is finite or not.
// This method returns true if a value is a finite number.
// Infinite (not finite) values are Infinity, -Infinity, or NaN

// let num1 = 386483265486;
// console.log(Number.isFinite(num1));      // true
// let num2 = 0000000;
// console.log(Number.isFinite(num2));      // true
// let num3 = Infinity;
// console.log(Number.isFinite(num3));      // false
// let num4 = -Infinity;
// console.log(Number.isFinite(num4));      // false
// let num5 = 32e34;
// console.log(Number.isFinite(num5));      // true
// let num6 = '0';
// console.log(Number.isFinite(num6));      // false
// let num7 = NaN;
// console.log(Number.isFinite(num7));      // false
// let num8 = 0 / 0;
// console.log(Number.isFinite(num8));      // false
// let num9 = null;
// console.log(Number.isFinite(num9));      // false
// let num10 = 23/0;
// console.log(Number.isFinite(num10));     // false






// 11. isSafeInteger()
// The isSafeInteger() method checks whether a value is a safe integer. This method returns a Boolean value (true or false) that indicates whether the given value is a safe integer or not.
// This method returns true if a number is a safe integer. Otherwise it returns false.

// let num1 = 386483265486;
// console.log(Number.isSafeInteger(num1));     // true
// let num2 = 0000000;
// console.log(Number.isSafeInteger(num2));     // true
// let num3 = Infinity;
// console.log(Number.isSafeInteger(num3));     // false
// let num4 = -Infinity;
// console.log(Number.isSafeInteger(num4));     // false
// let num5 = 32e34;
// console.log(Number.isSafeInteger(num5));     // true
// let num6 = '0';
// console.log(Number.isSafeInteger(num6));     // false
// let num7 = NaN;
// console.log(Number.isSafeInteger(num7));     // false
// let num8 = 34;
// console.log(Number.isSafeInteger(num8));     // false
// let num9 = null;
// console.log(Number.isSafeInteger(num9));     // false
// let num10 = 45.67;
// console.log(Number.isSafeInteger(num10));    // false




// 12. isNaN()
// The isNaN() method checks whether a value is a NaN and its type is Number. 
// This method returns true if the given value is NaN and its type is Number, otherwise, it returns false.

// let num1 = NaN;
// console.log(Number.isNaN(num1));     // true
// let num2 = "NaN";
// console.log(Number.isNaN(num2));     // false
// let num3 = Infinity;
// console.log(Number.isNaN(num3));     // false
// let num4 = "string"/5;
// console.log(Number.isNaN(num4));     // true
// let num5 = 32e34;
// console.log(Number.isNaN(num5));     // false
// let num6 = '0';
// console.log(Number.isNaN(num6));     // false
// let num7 = undefined;
// console.log(Number.isNaN(num7));     // false
// let num8 = {};
// console.log(Number.isNaN(num8));     // false





// 13. Number()
// This method can be used to convert JavaScript variables to numbers:

// console.log(Number(true));      // 1
// console.log(Number(false));     // 0
// console.log(Number("10"));      // 10
// console.log(Number("  10"));    // 10
// console.log(Number("10  "));    // 10
// console.log(Number(" 10  "));   // 10
// console.log(Number("10.33"));   // 10.33
// console.log(Number("10,33"));   // NaN
// console.log(Number("10 33"));   // NaN
// console.log(Number("John"));    // NaN


// Number() method can convert a date to a number.
// console.log(Number(new Date("1970-01-01")));    // 0


// Number() method can convert a date to a number:
// console.log(Number(new Date("2017-09-30")));    // 1506729600000


// Number() method returns the number of milliseconds since 1.1.1970.
// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
// console.log(Number(new Date("1970-01-02")));    // 86400000





