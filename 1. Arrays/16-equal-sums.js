/**
 * 
 * @param {Array} arr 
 */
function solve(arr){
    for(let i=0; i<arr.length; i++){
        let sumToLeft = 0;
        let sumToRight = 0;

        for( let j = 0; j<i; j++){
            sumToLeft+=arr[j];
        }

        for( let j = i+1; j<arr.length; j++){
            sumToRight+=arr[j];
        }

        if(sumToLeft===sumToRight){
            console.log(i);
            return;
        }
    }

    console.log('no');
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);