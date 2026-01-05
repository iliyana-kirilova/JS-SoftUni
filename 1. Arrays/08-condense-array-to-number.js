/**
 * 
 * @param {Array} input 
 */

function solve(input){
    if(input.length===1){
        console.log(input[0]);
        return;
    }

    let result = [];
    while(true){
        for(let i=0; i<input.length-1; i++){
            let firstValue = input[i];
            let secondValue = input[i+1];
            let sum = firstValue+secondValue;
            result.push(sum);
        }

        if(result.length==1){
            break
        }

        input = result;
        result = [];
    }

    console.log(result[0]);
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);