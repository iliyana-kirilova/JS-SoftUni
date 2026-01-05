/**
 * 
 * @param {Array} input 
 */
function solve(input){
    let wagons = input.shift().split(" ").map(Number);
    let maxCapacity = Number(input.shift());

    for(let i=0; i<input.length; i++){
        let command = input[i];
        let passengers =0;
        if(command.includes('Add')){
            passengers = Number(command.split(" ")[1]);
            wagons.push(passengers);
        }else{
            let passengers = Number(command);

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= maxCapacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
    
}

solve(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75']);

solve(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6']);