/* For this exercise, write two functions, reverseArray and 
reverseArrayInPlace. The first, reverseArray, takes an array
as argument and produces a new array that has the same 
elements in the inverse order. The second, reverseArrayInPlace, 
does what the reverse method does: it modifies the array given 
as argument in order to reverse its elements. Neither may use 
the standard reverse method. */

function reverseArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    var temp = [];
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        temp[i] = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp[i];
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);