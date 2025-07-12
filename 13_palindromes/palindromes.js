const palindromes = function (string) {

    let chars = string.split("");

    let cleanstring = "";

    for(char of chars){
        console.log(char + " " + char.match("[a-zA-Z0-9]+"));
        if(char.match("[a-zA-Z0-9]+")){
            cleanstring += char;
        }
    }

    //String with punctuations and spaces removed
    console.log("Cleaned string: " + cleanstring.toUpperCase());
    

    let strchars = cleanstring.split("");
    let reversed = [];
    let i = cleanstring.length - 1;

    while(i > -1){

        //console.log(i + " " + strchars[i]);
        reversed.push(strchars[i]);
        i--;
    }

    //Cleaned string spelled backwards
    reversedstring = reversed.join("");

    
    console.log("Reversed string: " + reversedstring.toUpperCase());

    if(cleanstring.toUpperCase() == reversedstring.toUpperCase()){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
