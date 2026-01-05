/**
 * 
 * @param {Array} arr 
 */
function solve(arr){
    arr = arr.map(Number);
    let result = [];
    for (const number of arr) {
        if(number<0){
            result.unshift(number);
        }else{
            result.push(number);
        }
    }

    result.forEach(number=>{
        console.log(number);
        
    });
}

solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);