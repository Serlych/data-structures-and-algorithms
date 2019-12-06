        const solitaire = [
// Y      X   0  1  2  3  4  5  6  7  8
/* 0 */      [2, 2, 2, 1, 1 ,1, 2, 2, 2],
/* 1 */      [2, 2, 2, 1, 1 ,1, 2, 2, 2],
/* 2 */      [2, 2, 2, 1, 1 ,1, 2, 2, 2],
/* 3 */      [1, 1, 1, 1, 1 ,1 ,1 ,1 ,1],
/* 4 */      [1, 1, 1, 1, 0 ,1 ,1 ,1 ,1],
/* 5 */      [1, 1, 1, 1, 1 ,1 ,1 ,1 ,1],
/* 6 */      [2, 2, 2, 1, 1 ,1, 2, 2, 2],
/* 7 */      [2, 2, 2, 1, 1 ,1, 2, 2, 2],
/* 8 */      [2, 2, 2, 1, 1 ,1, 2, 2, 2]
        ]
        
function findZero(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0) {
                return [j, i];
            }
        }
    }
    
    return -1;
}

findZero(solitaire)

function solve(board) {
    let zero = findZero(board)
    if (board[zero[0]]) {
    
    }
}
