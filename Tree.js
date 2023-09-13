// position is an array of coordinate pair [x,y]
// moves is an array of coordinate pair arrays
module.exports = class Tree {
    constructor(position, moves) {
        this._pos = position;
        this._moves = moves;
        if (this._moves)
            this.#validateMoves();
    }

    get pos() { return this._pos; }

    get moves() { return this._moves; }
    set moves(moves) { 
        this._moves = moves;
        this.#validateMoves();
     }

    validRange(coordinatesPair) {
        return (coordinatesPair[0] >= 0 && coordinatesPair[0] < 8) && (coordinatesPair[1] >= 0 && coordinatesPair[1] < 8);
    }

    #validateMoves() {
        let validMoves = [];
        for (let i = 0; i < this._moves.length; i++) {
            const move = this._moves[i];
            if (this.validRange(move))
                validMoves.push([move[0], move[1]]);
        }
        console.log(validMoves);
    }
}