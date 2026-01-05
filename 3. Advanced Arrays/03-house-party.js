function solve(arr) {
    let guests = [];
    for(let guest of arr){
        let input = guest.split(" ");
        let name = input.shift();

        if(input.includes('not')){
            if(guests.includes(name)){
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            }else{
                console.log(`${name} is not in the list!`)
            }
        }else{
            if(guests.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                guests.push(name);
            }
        }       
    }

    guests.forEach(name => console.log(name));

}

solve(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!']);

solve(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);