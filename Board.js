module.exports = class Board {
    constructor(fill = '') {
        this._grid = this.createGrid(fill);
    }

    get grid() { return this._grid; }

    createGrid(fill) {
        const newGrid = Array(8);
        for (let i = 0; i < 8; i++)
            newGrid[i] = Array(8).fill([fill, '']);
        return newGrid;
    }

    getValue(x, y) {
        return this._grid[y][x][0];
    }

    setValue(x, y, val) {
        this._grid[y][x] = [val, this._grid[y][x][1]];
    }

    getPath(x, y) {
        return this._grid[y][x][1];
    }

    setPath(x, y, prev) {
        this._grid[y][x] = [this._grid[y][x][0], prev];
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
    printPath() {
        let string = '';
        for (let i = 0; i < 8; i++) {
            let row = '['
            for (let j = 0; j < 8; j++) {
                row += this.getPath(j, i) + ' ';
            }
            row = row.trim() + ']\n';
            string += row;
        }
        console.log(string);
    }

    buildPath(start, end) {
        let loc = end;
        let path = '';
        while(loc != 'BEG') {
            path = `\n[${loc[0]},${loc[1]}]` + path;
            loc = this.getPath(loc[0], loc[1]);
        }
        return path.trim();
    }
}