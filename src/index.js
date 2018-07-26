'use strict';

const readline = require('readline');
const Board = require('./Board');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

let prevAction;

rl.on('line', (line) => {
    switch (line) {
        case '':
            if (typeof prevAction === 'function') {
                prevAction();
            }
            console.log(`Your input was '${line.trim()}'`);
            break;
        case 'left':
            Board.moveLeft();
            prevAction = Board.moveLeft;
            console.log(`Your input was '${line.trim()}'`);
            break;
        case 'right':
            Board.moveRight();
            prevAction = Board.moveRight;
            console.log(`Your input was '${line.trim()}'`);
            break;
        case 'down':
            Board.moveDown();
            prevAction = Board.moveDown;
            console.log(`Your input was '${line.trim()}'`);
            break;
        case 'up':
            Board.moveUp();
            prevAction = Board.moveUp;
            console.log(`Your input was '${line.trim()}'`);
            break;
        case 'stop':
            prevAction = undefined;
            break;
        default:
            console.log(`Your input was '${line.trim()}'`);
            break;
    }

    Board.hasBeenPointGathered();
    Board.write();

    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});

Board.init();
Board.write();
rl.prompt();
