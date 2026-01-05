function solve(arr1, arr2){
    let[elementsToTake, elementsToDelete, number] = arr2;
    let newArr=[];
    newArr = arr1.slice(0,elementsToTake);
    newArr.splice(0,elementsToDelete);
   
    let count =0;
    for(let element of newArr){
        if(element===number){
            count++;
        }
    }

    console.log(`Number ${number} occurs ${count} times.`);
    
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);