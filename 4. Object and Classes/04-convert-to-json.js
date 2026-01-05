function solve(name, lastName, hairColor){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let jsonData = JSON.stringify(person);
    console.log(jsonData);
    
}

solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');