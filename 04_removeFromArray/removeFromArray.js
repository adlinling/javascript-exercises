const removeFromArray = function(inputArray, ...removethese) {

    let newArray = [];

    console.log(removethese);

    for (element of inputArray){
        
        console.log(element);
        
        //If element is inside the removethese array, the value of removethese.indexOf(element) will be > -1, i.e. returns the index location in the removethese array
        if(removethese.indexOf(element) !== -1){

            console.log(element + " will be removed");

        }else{
            console.log(element + " can stay");
            newArray.push(element);
        }
        
    }

    //console.log(newArray);
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
