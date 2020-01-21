const fs = require('fs');
const storage = require('./numbers.json');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Please enter the number from 0 to 9: `, (num) => {
    if (num >= 0 && num <= 9) {
        console.log(`Your number is: ${num}`);
        fs.writeFile(`${num}.png`, storage[num], {encoding: 'base64'}, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log(`File was successfully saved into ${num}.png`);
            }
        });
    } else {
        console.log(`Wrong number ${num}, please try again!`);
    }

    readline.close()
});

