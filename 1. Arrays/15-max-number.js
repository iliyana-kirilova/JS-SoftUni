function solve(arr){
    let modifiedArray= [];
    let max = -Infinity;
    for(let i = arr.length - 1; i >= 0; i--){
        let firstValue = arr[i];

        if(firstValue>max){
            modifiedArray.push(firstValue);
            max = arr[i]
        }
    }

    console.log(modifiedArray.reverse().join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);