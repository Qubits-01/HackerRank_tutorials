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

function getLetter(s) {
    let letter;
    
    // Write your code here
    switch (identify(s[0])) {
        case 0:
            letter = 'A';
            break;
        case 1:
            letter = 'B';
            break;
        case 2:
            letter = 'C';
            break;
        default:
            letter = 'D'
    }
    
    return letter;
}

function identify(char) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        return 0;
    }
    
    if (['b', 'c', 'd', 'f', 'g'].includes(char)) {
        return 1;
    }
    
    if (['h', 'j', 'k', 'l', 'm'].includes(char)) {
        return 2;
    }
    
    return 3;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
