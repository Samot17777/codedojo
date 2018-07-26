'use strict';

const floor = '.';

const hero = 'X';
const point = '*';

let points = 0;

const boardWidth = 128;
const boardHeight = 128;
const heroCoordinates = getObjectCoordinates(boardWidth, boardHeight);
let pointCoordinates = getObjectCoordinates(boardWidth, boardHeight);

let board = [];

function getObjectCoordinates(posX, posY) {
    const x = Math.floor(Math.random() * posX);
    const y = Math.floor(Math.random() * posY);
    return ({x, y});
}

function isInsideArea(x, y) {
    if (x >= 0 && y >= 0 && x < boardWidth && y < boardHeight) {
        return true
    } else {
        return false;
    }
}

function setObj(object) {
    const {x, y} = getObjectCoordinates(boardWidth, boardHeight);

    if (board[y][x] !== '.') {
        setObj(object)
    } else {
        board[y][x] = object;
        if (what === point) {
            pointCoordinates.x = x;
            pointCoordinates.y = y;
        }
    }
}

function hasBeenPointGathered() {
    if (heroCoordinates.x === pointCoordinates.x && heroCoordinates.y === pointCoordinates.y) {
        points++;

        setObj(point);
        setObj('@');
    }
}

function canMove(x, y) {
    if (board[y][x] === '@') {
        return false;
    } else {
        return true;
    }
}

function moveLeft() {
    const {x, y} = heroCoordinates;

    if (isInsideArea(x - 1, y) && canMove(x - 1, y)) {
        board[y][x] = '.';
        board[y][x - 1] = hero;
        heroCoordinates.x--;
    }
}

function moveRight() {
    const {x, y} = heroCoordinates;
    if (isInsideArea(x + 1, y) && canMove(x + 1, y)) {
        board[y][x] = '.';
        board[y][x + 1] = hero;
        heroCoordinates.x++;
    }
}


function moveUp() {
    const {x, y} = heroCoordinates;
    if (isInsideArea(x, y - 1) && canMove(x, y - 1)) {
        board[y][x] = '.';
        board[y - 1][x] = hero;
        heroCoordinates.y--;
    }
}

function moveDown() {
    const {x, y} = heroCoordinates;
    if (isInsideArea(x, y + 1) && canMove(x, y + 1)) {
        board[y][x] = '.';
        board[y + 1][x] = hero;
        heroCoordinates.y++;
    }
}


function init() {

    for (let i = 0; i < boardHeight; i++) {
        board[i] = [];
        for (let j = 0; j < boardWidth; j++) {

            if (i === heroCoordinates.y && j === heroCoordinates.x) {

                board[i][j] = hero;
            } else if (i === pointCoordinates.y && j === pointCoordinates.x) {
                board[i][j] = point;

            } else {
                board[i][j] = floor;

            }
        }
    }
}

function write() {
    for (let i = 0; i < boardHeight; i++) {
        console.log(board[i].join(''));
    }

    console.log('_______________')
    console.log('Points', points)
}

module.exports = {
    board: board,
    init: init,
    write: write,
    getObjectCoordinates: getObjectCoordinates,
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveUp: moveUp,
    moveDown: moveDown,
    heroCoordinates: heroCoordinates,
    pointCoordinates: pointCoordinates,
    boardWidth: boardWidth,
    boardHeight: boardHeight,
    hasBeenPointGathered: hasBeenPointGathered,
    isInsideArea: isInsideArea
};