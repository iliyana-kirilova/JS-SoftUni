function solve(arr){
    let newArr = [];
    for(let num of arr){
        if(!newArr.includes(num)){
            newArr.push(num);
        }
    }

    console.log(newArr.join(" "));
    
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);