
function solve(arr){
    let newArr = arr.shift().split(" ").map(Number);
    for(let i=0; i<arr.length; i++){
        let commandParts = arr[i].split(" ");

        let command = commandParts[0];
        if(command==='Add'){
            let num = Number(commandParts[1]);
            newArr.push(num);
        }else if(command==='Remove'){
            let num = Number(commandParts[1]);
            newArr = newArr.filter(number=>number!==num);
        }else if(command==='RemoveAt'){
            let index = Number(commandParts[1]);
            newArr.splice(index,1);
        }else if(command==='Insert'){
            let number = Number(commandParts[1]);
            let index = Number(commandParts[2]);
            newArr.splice(index,0,number);
        }

    }
    console.log(newArr.join(" "));
    
}

solve(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3']);

solve(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2']);