function solve(arr){
    let newArr = [];
    arr.sort((a,b)=> b-a);
    while(arr.length>0){
        let firstBiggest = arr.shift();
        newArr.push(firstBiggest);

        let firstSmallest = arr.pop();
        newArr.push(firstSmallest);
    }

    console.log(newArr.join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);