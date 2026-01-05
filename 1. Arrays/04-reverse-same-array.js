function solve(input){
    for (let index = 0; index < input.length/2; index++) {
        let reversedIndex = input.length-1-index;
        let value = input[index];
        let secondValue = input[reversedIndex];

        input[index] = secondValue;
        input[reversedIndex] = value;
       
    }
    console.log(input.join(" "));
}

solve(['a', 'b', 'c', 'd', 'e']);