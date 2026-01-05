function solve(n, input){
    let arr = [];
    for(let i=0; i<n; i++){
        let currentEl = input[i];
        arr.push(currentEl);
    }

    arr.reverse();
    
    console.log(arr.join(" "));
    

}

solve(3, [10, 20, 30, 40, 50]);