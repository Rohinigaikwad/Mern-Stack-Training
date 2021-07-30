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
console.log('Copy', shallowCopy);
console.log(fruits);

//sorting array
let sort = fruits.sort();
console.log('Sorting', sort);
console.log(fruits)

//reversing an array
let sort1 = fruits.sort() //first sort the array then reverse 
let rev = fruits.reverse();// Then reverse the order of the elements
console.log('Reversing', rev)


// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

//sort in ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b
});
console.log('acending', points)


//sort in descending order
points.sort(function (a, b) {
    return b - a;
});
console.log('descending', points)

//sorting an array in ascending order
let numbers = [1, 3, 4, 5, 6, 2];
console.log(numbers.indexOf(2)); //index of wrongly placed element
let temp = 0;
for (let i = 0; i < numbers.length; i++)
{
    for (let j = i + 1; j < numbers.length; j++)
    {
        if (numbers[i] > numbers[j])
        {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }

}
console.log('Sorted in Ascending', numbers)


//check array is sorted or not
let array = [1, 3, 4, 5, 6, 2];
function isSorted(array) {
    const limit = array.length - 1;
    for (let i = 0; i < limit; i++)
    {
        const current = array[i], next = array[i + 1];
        if (current > next)
        {
            return false;
        }
    }
    return true;
}
