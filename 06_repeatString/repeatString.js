const repeatString = function(string, num) {

    let str = "";

    if(num < 0){

        str = "ERROR";

    }else{

        for(let i=1; i <=num; i++){
            //console.log(i);
            str += string;
        }

    }

   

    //console.log(str);
    return str;
};

// Do not edit below this line
module.exports = repeatString;
