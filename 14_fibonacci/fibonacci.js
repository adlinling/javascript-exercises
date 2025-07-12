const fibonacci = function(number) {

    let num = Number(number);

    if(num == 0) return 0;

    if(num < 0) return "OOPS";

    
    let sum;
    let seq = [];
    seq[0] = 1;
    seq[1] = 1;

    for(let i = 1; i < num - 1; i++){

        previndex = i - 1;

        nextindex = i + 1;

        sum = seq[i] + seq[previndex];
        
        seq[nextindex] = sum;

        //console.log(seq[nextindex]);
    
    }

    console.log(seq);

    return seq.pop();
};

// Do not edit below this line
module.exports = fibonacci;
