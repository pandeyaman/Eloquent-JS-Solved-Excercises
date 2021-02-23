/*Write a loop that makes seven calls to console.log to output the following triangle

#
##
###
####
#####
######
#######

*/

let i = 0;
let character = '#';
for (i = 0; i < 7; i++) {
    console.log(character);
    character = character + '#';
}

/*
 Start by printing one '#' character and for every next iteration just keep on adding the character '#' with another # 
using -> character = character + '#';
 */