function solve(catArr){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            return `${this.name}, age ${this.age} says Meow`;
        }
    }
    
    for(let catData of catArr){
        let cat = catData.split(" ");

        let name = cat[0];
        let age = cat[1];

        let newCat = new Cat(name, age);
        console.log(newCat.meow());  
    }
}

solve(['Mellow 2', 'Tom 5']);