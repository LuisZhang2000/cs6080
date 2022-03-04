fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');

const lines = data.split('\n');
console.log(lines);

let min = 999999999999;
let max = -999999999999;

for (const line of lines) {
    if (line != '') {
        const num = parseInt(line);
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    
}

console.log(`Range = ${max - min}`);
