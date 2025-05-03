const sumAll = function(start, end) {

    let i = start;
    let sum = 0;

    if(start < 0 || end < 0) return "ERROR";

    if(Math.floor(start) !== start || Math.floor(end) !== end)  return "ERROR";

    if(typeof start !== "number" || typeof end !== "number") return "ERROR";

    if(start < end){
        
        while(i <= end){

            console.log(i);
            sum += i;
            i++;
        }

    }else{

        while(i >= end){
            console.log(i);
            sum += i;
            i--;
        }

    }

    //console.log("Total: " + sum);
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
