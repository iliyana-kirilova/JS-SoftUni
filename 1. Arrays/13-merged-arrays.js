/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function solve(arr1, arr2){
    let modifiedArray =[];
    for(let i=0; i<arr1.length; i++){
        let firstValue = arr1[i];
        let secondValue = arr2[i];

        if(i%2==0){
            modifiedArray.push(Number(firstValue)+Number(secondValue));
        }else{
            modifiedArray.push(firstValue + secondValue);
        }

    }

    console.log(modifiedArray.join(" - "));
    
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);

solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);