
/** Write a program that creates a string that represents an 8×8 grid, 
 *  using newline characters to separate lines. At each position of the grid there 
 *  is either a space or a "#" character. The characters should form a chessboard.

    Passing this string to console.log should show something like this:

     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
*/

var rows = 10;
for(var i=0; i<rows; i++){
    if(i%2==0){
        for(var j=0;j<rows; j++){
            if(j%2==0)
        process.stdout.write(' ');
            else 
            process.stdout.write('#');
        }
    }
    else{
        for(var j=0;j<rows; j++){
            if(j%2==0)
            process.stdout.write('#');
            else 
            process.stdout.write(' ');
        }
    }
    
    console.log('');
}
