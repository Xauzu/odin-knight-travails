module.exports = class Board {
    constructor(fill = '') {
        this._grid = this.createGrid(fill);
    }

    get grid() { return this._grid; }

    createGrid(fill) {
        const newGrid = Array(8);
        for (let i = 0; i < 8; i++)
            newGrid[i] = Array(8).fill(fill);
        return newGrid;
    }

    getValue(x, y) {
        return this._grid[y][x];
    }

    setValue(x, y, val) {
        this._grid[y][x] = val;
    }

    printGrid() {
        let string = '';
        for (let i = 0; i < 8; i++) {
            let row = '['
            for (let j = 0; j < 8; j++) {
                row += this.getValue(j, i) + ' ';
            }
            row = row.trim() + ']\n';
            string += row;
        }
        console.log(string);
    }
}