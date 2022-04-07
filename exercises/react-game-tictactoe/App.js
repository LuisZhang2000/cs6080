import './App.css';
import { useState } from 'react';

function App() {
  const emptyBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const [board, setBoard] = useState(emptyBoard);
  const [turn, setTurn] = useState('X');
  const [winningTiles, setWinningTiles] = useState([]);
  const [winner, setWinner] = useState('');

  const handleTurn = (y, x) => {
    if (!winner && board[y][x] === '') {
      let newBoard = board;
      newBoard[y][x] = turn;
      setTurn(turn === 'X' ? 'O' : 'X');
      setBoard(newBoard);
      checkWin();
    }
  };

  const checkWin = () => {
    const winningLines = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ]
    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a[0]][a[1]] !== '' && board[a[0]][a[1]] === board[b[0]][b[1]] && board[b[0]][b[1]] === board[c[0]][c[1]]) {
        //Game won
        setWinner(turn === 'X' ? 'X' : 'O')
        setWinningTiles([a, b, c])
      }
    }
  }

  const checkWinningTile = (y, x) => {
    let win = false;
    winningTiles.forEach(tile => {
      if (tile[0] === y && tile[1] === x) {
        win = true;
      }
    })
    return win ? 'winner' : '';
  }

  return (
    <div className='parent'>
      {board.map((row, y) => {
        return (
          <div className='row' key={`row-${y}`}>
            {row.map((value, x) => {
              return (
                <button 
                key={`col-${x}`}
                className={checkWinningTile(y, x)}
                onClick={() => handleTurn(y, x)}>{value}</button>
              )
            })}
          </div>
        )
      })}
      {winner && (
        <div>The winner is {winner}</div>
      )}
    </div>
  );
}

export default App;
