// position is an array of coordinate pair [x,y]
// moves is an array of coordinate pair arrays
module.exports = class Tree {
    constructor(position, moves) {
        this._pos = position;
        this._moves = moves;
    }

    get pos() { return this._pos; }

    get moves() { return this._moves; }
    set moves(moves) { this._moves = moves; }
}