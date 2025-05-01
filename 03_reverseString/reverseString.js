const reverseString = function(string) {

    let chars = string.split("");

    let reversed = [];

    let i = string.length - 1;

    while(i > -1){

        //console.log(i + " " + chars[i]);
        reversed.push(chars[i]);
        i--;
    }

    reversedstring = reversed.join("");

    return reversedstring;

};

// Do not edit below this line
module.exports = reverseString;
