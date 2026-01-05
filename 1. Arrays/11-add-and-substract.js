/**
 * 
 * @param {Array} arr 
 */

function solve(arr){
    let originalSum=0;
    let modifiedSum=0;
    let modifiedArray =[];

    for(let i=0;i<arr.length;i++){
        let number = arr[i];
        originalSum+=number;

        if(number%2==0){
            number+=i;
        }else{
            number-=i;
        }

        let modifiedNum = number;

        modifiedSum+=modifiedNum;
        modifiedArray.push(modifiedNum);
    }

    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);
    
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);