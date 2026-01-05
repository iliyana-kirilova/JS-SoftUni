function solve(jsonString){
    let person = JSON.parse(jsonString);
    Object.entries(person).forEach(([key, value])=>{
        console.log(`${key}: ${value}`);
    });
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
