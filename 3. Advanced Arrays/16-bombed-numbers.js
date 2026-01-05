/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function solve(arr1, arr2){
    let [bombNum, power] = arr2;
    for(let i=0; i<arr1.length; i++){
        if (arr1[i] === bombNum) {

            let start = Math.max(0, i - power);
            let count = power * 2 + 1;

            arr1.splice(start, count);
            i = start - 1; 
        }
    }

    let sum = 0;
    arr1.forEach(num => sum+=num);
    console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);