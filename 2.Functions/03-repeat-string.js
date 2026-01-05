function repeat(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

let result = repeat("abc", 3);
repeat("String", 2);

console.log(result);