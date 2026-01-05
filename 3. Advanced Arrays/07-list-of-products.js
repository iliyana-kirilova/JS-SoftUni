/**
 * 
 * @param {Array} arr 
 */
function solve (arr){
    let newArr = arr.sort()
                    .map((element, index)=> console.log(`${index+1}.${element}`));

}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);

