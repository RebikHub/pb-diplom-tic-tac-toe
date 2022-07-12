let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
    activePlayer = 0;
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    renderBoard(board);
};

function boardWin() {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        } else if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true;
        };
    };
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    } else if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
        return true;
    } else {
        return false;
    };
};

function click(i, j) {
    board[i][j] = players[activePlayer];
    renderBoard(board);
    if (boardWin() === true) {
        showWinner(activePlayer);
    };
    activePlayer = (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
};