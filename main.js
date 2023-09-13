const Tree = require('./Tree.js');
const Board = require('./Board.js');
const Queue = require('./Queue.js');

const knightDisplacements = [
    [1,2],
    [2,1],
    [2,-1],
    [1,-2],
    [-1,-2],
    [-2,-1],
    [-2,1],
    [-1,2]
];

function validRange(coordinatesPair) {
    return (coordinatesPair[0] >= 0 && coordinatesPair[0] < 8) && (coordinatesPair[1] >= 0 && coordinatesPair[1] < 8);
}

function validateMoves(steps) {
    let validMoves = [];
    for (let i = 0; i < steps.length; i++) {
        const move = steps[i];
        if (validRange(move))
            validMoves.push([move[0], move[1]]);
    }
    return validMoves;
}

function trimSteps(board, x, y) {
    let knightSteps = knightDisplacements.map((disp, index) => {
        return [x + disp[0], y + disp[1]];
    });

    knightSteps = validateMoves(knightSteps);

    const results = []
    for (let i = 0; i < knightSteps.length; i++) {
        if (board.getValue(x, y) === '') {
            results.push(knightSteps[i]);
        }
    }
    
    return results;
}

// Way overboard for what was needed
function knightMoves(start, end, displayGrid) {
    console.log(' --- ')
    const board = new Board('');

    const startSteps = trimSteps(board, start[0], start[1]);

    const root = new Tree(start, startSteps);
    board.setPath(start[0], start[1], 'BEG');

    const q = new Queue;
    q.enqueue(root);

    while (q.length > 0) {
        const item = q.dequeue();
        [x, y] = item.pos;

        // If values exist, it is already calculated
        if (board.getValue(x, y) === '') {
            board.setValue(x, y, item.totalMoves);

            const newMoves = [];
            for (let i = 0; i < item.moves.length; i++) {
                // Check if position already has value
                [branchX, branchY] = item.moves[i];
                const knightSteps = trimSteps(board, branchX, branchY);

                const branch = new Tree([branchX, branchY], knightSteps, item.totalMoves + 1);
                if (board.getPath(branchX, branchY) === '')
                    board.setPath(branchX, branchY, [x,y]);
                newMoves.push(branch);
                q.enqueue(branch);
            }

            item.moves = newMoves;
        }
    }

    if (displayGrid)
        board.printGrid();

    const stepsNeeded = board.getValue(...end);
    console.log(`You made it in ${stepsNeeded} moves! Here's your path:`);

    let moves = board.buildPath(start, end);
    console.log(moves);
}

knightMoves([0,0], [1,2]);
knightMoves([0,0], [3,3], 1);
knightMoves([3,3], [0,0], 1);
knightMoves([3,3], [4,3], 1);