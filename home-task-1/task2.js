function drawChessboard() {
    const width = 8;
    const height = 8;
    const board = []

    let line = [];

    for (let i = 1; i <= width; i++) {
        i % 2 === 0 ? line.push('b') : line.push('w');
    }

    for (let j = 1; j <= height; j++) {
        j % 2 === 0 ? board.push(line.slice().reverse().join('')) : board.push(line.join(''));
    }
    console.log(board);
}

drawChessboard();