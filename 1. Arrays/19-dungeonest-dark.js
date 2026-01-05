/**
 * 
 * @param {String} str 
 */
function solve(str){
    let initialHealth = 100;
    let initialCoins = 0;
    let bestRoom =1;

    let rooms = str.split('|');
    for(let room of rooms){
        let command = room.split(' ')[0];
        let value = Number(room.split(' ')[1]);
        
        if(command==="potion"){
            let healthToAdd = value;
            if(healthToAdd+initialHealth>100){
                healthToAdd=100-initialHealth
            }
            initialHealth+=healthToAdd;
            console.log(`You healed for ${healthToAdd} hp.`);
            console.log(`Current health: ${initialHealth} hp.`)
        }else if(command==="chest"){
            let coinsToAdd = value;
            initialCoins+=coinsToAdd;
            console.log(`You found ${coinsToAdd} coins.`);
        }else{
            let monster = command;
            let attack = value;

            initialHealth-=value;
            if(initialHealth>0){
                console.log(`You slayed ${monster}.`);
            }else{
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }

    if(initialHealth>0){
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");