// position is an array of coordinate pair [x,y]
// moves is an array of coordinate pair arrays
module.exports = class Tree {
    constructor(position, moves, total) {
        this._pos = position;
        this._moves = moves || null;
        this._totalMoves = total || 0;
    }

    get pos() { return this._pos; }

    get totalMoves() { return this._totalMoves; }

    get moves() { return this._moves; }
    set moves(moves) { 
        this._moves = moves;
    }
}