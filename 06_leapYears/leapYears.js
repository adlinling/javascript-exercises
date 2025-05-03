const leapYears = function(yearTocheck) {
    
    console.log("Checking year: " + yearTocheck);

    if(yearTocheck % 400 == 0) return true;


    if(yearTocheck % 4 == 0){

        if(yearTocheck % 100 !== 0){
            return true;
        }else{
            return false;
        }
        
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
