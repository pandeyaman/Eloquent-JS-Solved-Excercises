var array = []; //Declaring an Array to store the numbers from the range

//Returns an array within the specified range
function range(start, end) {
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

//Adds up the array and returns the total
function sum(array){  
    var total = 0; 
    for(var i in array){  
       total = total+array[i];  
    }
    return total;
} 

console.log(sum(range(1,100)));