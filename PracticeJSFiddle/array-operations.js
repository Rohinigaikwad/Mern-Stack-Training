let fruits = ['Apple', 'Banana'];
console.log(fruits.length);

//Access an array item using index position
let first = fruits[0]
console.log(first);
// Apple

let last = fruits[fruits.length - 1]
// Banana
console.log(last);

//Loop over an Array
fruits.forEach(function (item, index, array) {
    console.log(item, index)
})

//Add an item to the end of the array
let newLength = fruits.push('Orange')
console.log(newLength);
console.log(fruits);

//Remove an item from the end of an Array
let removeLast = fruits.pop() //removes last item 

console.log('Removelast', removeLast);
console.log(fruits);

//Remove an item from the beginning of an Array
let front = fruits.shift() //remove 1st item from the front
console.log('frontRemove', front);
console.log(fruits);

//Add an item to the beginning of an Array
let addFront = fruits.unshift('Strawberry') //add to front
console.log('Add To Front', addFront); //returns length
console.log(fruits); //display array 

//Find the index of an item in the Array
fruits.push('Mango');
console.log(fruits);
let pos = fruits.indexOf('Banana')
console.log(pos);

//Remove an item by index position
let removedItem = fruits.splice(pos, 1);
console.log(fruits);

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
let pos1 = 1;
let n = 2; //no. of items to removed

let removedItems = vegetables.splice(pos, n);
console.log(removedItems);
console.log(vegetables);

//Copy an Array
let shallowCopy = fruits.slice();
console.log(shallowCopy);
console.log(fruits);

