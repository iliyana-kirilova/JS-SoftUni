/**
 * 
 * @param {Array} input 
 */

function solve(input){
    let evenSum = 0;
    let oddSum = 0;
    for(let number of input){
        if(number%2==0){
            evenSum+=number
        }else{
            oddSum+=number
        }
    }

    console.log(evenSum-oddSum);

}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);