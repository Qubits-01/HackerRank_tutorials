'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = [];
    var consonants = [];
    
    for (let i = 0; i < s.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }
    
    for (const letter of vowels) {
        console.log(letter);
    }
    
    consonants.forEach((letter, i) => {console.log(letter);})
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
