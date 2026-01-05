/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */

function solve(arr1, arr2){
    for(let element of arr1){
        if(arr2.includes(element)){
            console.log(element);
        }
    }

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);
