/**
 * 
 * @param {Array} arr 
 * @param {Number} number 
 */
function solve(arr, number){
    for(i=1; i<=number; i++){
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);