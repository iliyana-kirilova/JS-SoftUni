/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    arr.sort((a, b) => {
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();

        // 1. Сравнение по дължина
        if (nameA.length !== nameB.length) {
            return nameA.length - nameB.length;
        }

        // 2. Азбучно сравнение (case-insensitive)
        return nameA.localeCompare(nameB);
    });

    arr.forEach(name => console.log(name));
}


solve(['alpha', 'beta', 'gamma']);

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);