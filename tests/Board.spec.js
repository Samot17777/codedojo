'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;

const Board = require('./../src/Board');

const orginalMath = Math.random;
Math.random = () => 5;

Board.init();
describe('Board', function () {
    describe('#init()', function () {
        it('should fill the whole board with floor tiles', function () {
            const initialisedBoard = Board.board;
            for (let i = 0; i < initialisedBoard.length; i++) {
                for (let j = 0; j < initialisedBoard[i].length; j++) {
                    if (i === Board.heroCoordinates.y && j === Board.heroCoordinates.x) {
                        assert.equal(initialisedBoard[i][j], 'X');
                    } else {
                        if (i === Board.pointCoordinates.y && j === Board.pointCoordinates.x) {
                            assert.equal(initialisedBoard[i][j], '*');
                        } else {
                            assert.equal(initialisedBoard[i][j], '.');
                        }
                    }
                }
            }
        });
    });

    describe('#moveLeft()', function () {
        it('should go left', function () {
            const initialX = Board.heroCoordinates.x;
            Board.moveLeft();

            if (initialX === 0) {
                assert.equal(initialX, Board.heroCoordinates.x)
            } else {
                assert.equal(initialX - 1, Board.heroCoordinates.x)
            }
        });
    });

    describe('#moveRight()', function () {
        it('should go right', function () {
            const initialX = Board.heroCoordinates.x;
            Board.moveRight();

            if (initialX === Board.boardWidth - 1) {
                assert.equal(initialX, Board.heroCoordinates.x)
            } else {
                assert.equal(initialX + 1, Board.heroCoordinates.x)
            }
        });
    });

    describe('#moveUp()', function () {
        it('should go up', function () {
            const initialY = Board.heroCoordinates.y;
            Board.moveUp();

            if (initialY === 0) {
                assert.equal(initialY, Board.heroCoordinates.y)
            } else {
                assert.equal(initialY - 1, Board.heroCoordinates.y)
            }
        });
    });

    describe('#moveDown()', function () {
        it('should go up', function () {
            const initialY = Board.heroCoordinates.y;
            Board.moveDown();

            if (initialY === Board.boardHeight - 1) {
                assert.equal(initialY, Board.heroCoordinates.y)
            } else {
                assert.equal(initialY + 1, Board.heroCoordinates.y)
            }
        });
    });

    describe('#getObjectCoordinates()', function () {
        before(() => {
            Math.random = orginalMath;

        })
        after(() => {
            Math.random = () => 5;
            ;
        })
        it('should return object coordinates', function () {
            const heroCoordinates = Board.getObjectCoordinates(2, 3);

            expect(heroCoordinates.x).below(2);
            expect(heroCoordinates.y).below(3);
        });
    });

    describe('#isInsideArea()', function () {
        it('return false when it\' outside', function () {
            expect(Board.isInsideArea(50, 50)).equal(false);
        });

        it('return true if is inside', function () {
            expect(Board.isInsideArea(10, 10)).equal(true);
        });
    });
});
