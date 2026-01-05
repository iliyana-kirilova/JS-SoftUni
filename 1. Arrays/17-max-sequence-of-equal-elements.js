/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let currentCount = 1;
    let bestCount = 1;
    let bestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentNumber = arr[i];
        let previousNumber = arr[i - 1];

        if (currentNumber === previousNumber) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > bestCount) {
            bestCount = currentCount;
            bestNumber = currentNumber;
        }
    }

    console.log(Array(bestCount).fill(bestNumber).join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);