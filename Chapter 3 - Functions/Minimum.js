/**    Write a function min that takes two arguments and returns their minimum. 
 *     console.log(min(0, 10));
       // → 0
       console.log(min(0, -10));
       // → -10
 */

/** Storing the function in a variable || Binding a funtion in variable */
 let min1 = function(x,y){
    return Math.min(x,y);
 }
 console.log(min1(923,324));


 /** Defining the function separately and calling it afterwards */
function min2(x,y){
    return Math.min(x,y);
}
console.log(min2(342,567));


/** Using arrow fuction, less verbose method */
let min3 = (x,y) => Math.min(x,y);
console.log(min3(10,45));

