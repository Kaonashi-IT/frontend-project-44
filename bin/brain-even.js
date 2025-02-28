#!/usr/bin/env node

const greet = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    return name;
};          