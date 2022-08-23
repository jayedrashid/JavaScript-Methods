# `JavaScript: Methods Table`

`JavaScript Basic Methods`

<p align="center">
 <img width="400px" src="https://i.morioh.com/210504/9300349b.webp" />
 <h2 align="center"></h2>
</p>

---

## Quick Links

<!-- - [Summary](#summary) -->

- [Number Methods](#number-methods)
- [String Methods](#string-methods)
- [Array Methods](#array-methods)
- [Object Methods](#object-methods)

---

## Method Comparison

Comparison of different JavaScript Methods:

| Methods         | Types  | Description                                      | Returns | Mutable |
| --------------- | ------ | ------------------------------------------------ | ------- | - |
| `parseInt`      | Number | parses given string argument and returns integer | Number | N |
| `toString`      | Number | returns the given number in the form of a string | String | N |
| `toExponential` | Number | returns string exponential notation of given number | String | N |
| `toFixed`       | Number | rounds the string to a specified number of decimals | String | N |
| `toPrecision`   | Number | formats a number to a specified length | String | N |
| `valueOf`       | Number | returns the primitive value of a Number object | String | N |
| `toLocaleString`| Number | returns a Date object as a string | String | N |
| `parseFloat`    | Number | parses a value as a string and returns the first number | Number | N |
| `isInteger`     | Number | returns true if a value is an integer of the datatype Number, otherwise false | Boolean | N |
| `isFinite`      | Number | returns true if a value is a finite number | Boolean | N |
| `isSafeInteger` | Number | returns true if a number is a safe integer, otherwise false | Boolean | N |
| `Number`        | Number | used to convert JavaScript variables to numbers | Number | N |
| `isNaN`         | Number | returns true if the given value is NaN and its type is Number, otherwise false | Boolean | N |
| ============= | ====== | ================================================ | ======= | = |
| `startsWith`  | String | check if strings starts with specified character | Boolean | N |
| `endsWith`    | String | check if strings ends with specified character   | Boolean | N |
| `includes`    | String | check if strings contains specified character    | Boolean | N |
| `length`      | String | finds the length of the string                   | Length | N |
| `trim`        | String | removes whitespace from both ends                | String  | N |
| `slice`       | String | cut a string                                     | String  | N |
| `split`       | String | takes pattern and makes array                    | String  | N |
| `replace`     | String | replace with another string, manage case sensitivity with regex | String  | N |
| `repeat`      | String | make number of strings                           | String  | N |
| `charAt`      | String | returns character at specified position          | Character | N |
| `toUpperCase` | String | turn into upper case                             | String  | N |
| `toLowerCase` | String | turn into lower case                             | String  | N |
| ========== | ===== | ==================================================== | ========== | = |
| `concat`   | Array | merge two or more array elements                     | Array | N |
| `unshift`  | Array | adds one or more elements to the beginning           | Array | N |
| `shift`    | Array | removes first element from array and returns that removed element | Array | Y |
| `push`     | Array | adds one or more elements to the end of array        | Array | N |
| `pop`      | Array | removes the last element from array                  | Array | N |
| `length`   | Array | finds the length of the array elements               | Length | N |
| `length-1` | Array | finds the last array element                         | Individual Item | N |
| `splice`   | Array | changes contents of by removing and adding new elements | Array  | Y |
| `forEach`  | Array | loop over array items                                | Individual Item | N |
| `includes` | Array | check if array contains item                         | Boolean | N |
| `filter`   | Array | filter down the item                                 | Array   | N |
| `map`      | Array | call a function on every item                        | Array   | N |
| `reduce`   | Array | call a function each item and reduce into single value | Single Value | N |
| `some`     | Array | check if at least 1 item is passed                   | Boolean | N |
| `every`    | Array | check if all items are passed                        | Boolean | N |
| `sort`     | Array | arrange the order of array                           | Array   | N |
| `reverse`  | Array | arrange the order of array in opposite               | Array   | N |
| `Array.from`| Array | change all thing that are array - like to true array | Array   | N |
| `Array.of` | Array | create array from every arguments passed into it    | Array   | N |
| `Array.isArray`| Array | check if it is array                           | Boolean | N |
| `find`     | Array | returns value of first element that passes a test    | Single Value | N |
| ================ | ====== | =========================================== | ========== | = |
| `Object.create`  | Object | create new object by using existing object as prototype of the newly created object | Object | N |
| `Object.keys`    | Object | returns array of names of object's own string properties | Array | N |
| `Object.values`  | Object | returns array of values of object's own string properties | Array | N |
| `Object.entries` | Object | returns array of key value pairs of object's own string properties | Array | N |
| `Object.assign`  | Object | it copies the values of object's own string properties from source object to a target object | Object | N |
| `Object.freeze`  | Object | object freezes so can't delete/change it's properties | Object | N |
| `hasOwnProperty` | Object | checks property inside object as its own property | Boolean | N |

`Property Add`:
```sh
obj.name = 'John';
```

`Property Modify/Replace`:
```sh
obj.name = 'Richard';
```

`Property Delete`:
```sh
delete obj.name;
```


---

## Number Methods

<p align="center">
 <img width="400px" src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/124615633_134976765049605_8169739762146109499_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=973b4a&_nc_ohc=NjP_MJ1dmhwAX_DAPzj&_nc_ht=scontent.fdac99-1.fna&oh=00_AT_WJtXBZdHf9uVxfGGIZJCYIbQ8t3ecn-UbYoxxM4m3EQ&oe=632A5EB9" />
 <h2 align="center"></h2>
</p>


## String Methods

<p align="center">
 <img width="400px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--LLK9xR01--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/1S3N0m1Z1L11/Image%25202018-07-12%2520at%252011.45.54%2520AM.png" />
 <h2 align="center"></h2>
</p>

## Array Methods

<p align="center">
 <img width="400px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--uLpFFtBT--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/3n242u0W3O3J/Image%25202018-06-24%2520at%25208.05.54%2520PM.png" />
 <h2 align="center"></h2>
</p>

## Object Methods

<p align="center">
 <img width="400px" src="https://www.positioniseverything.net/wp-content/uploads/2022/02/Accessing-Object-Methods-in-JavaScript-300x200.jpg" />
 <h2 align="center"></h2>
</p>


---

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://jayedrashid.com/"><img src="https://avatars.githubusercontent.com/u/68325519?s=400&u=c3380d6ce56295f87d4f877de9ca04b7adf28d55&v=4" width="100px;" style="border-radius:50%; border:2px solid white;" alt=""/><br /><sub><b>Jayed Rashid</b></sub></a><br />   
  </tr>
</table>

---

## Let's Connect

Feel free to Contact me on [Twitter](https://mobile.twitter.com/jayedrashid), send an email to jayed@jayedrashid.com

<img height="20" src="https://www.bollywoodmdb.com/images/uparrow.gif"> [back to top](#quick-links)<br>


