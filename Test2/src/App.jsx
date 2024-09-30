import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";


function App() {
  //const [board, setBoard] = useState(Array(9).fill(null));
  const [board, setBoard] = useState(() => {
    const storedBoard = window.localStorage.getItem('board');
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null);
  });

  //const [turn, setTurn] = useState(TURNS.X);
  const [turn, setTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn');
    //return storedTurn? storedTurn : TURNS.X;
    return storedTurn ?? TURNS.X;
  });

  // null: no hay ganador, false: empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // verificar que el cuadrado no está activado o no hay ganador
    if (board[index] || winner) return;

    // actualizar el tablero
    const newBoard = [... board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    });

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <section className="turn">
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
      
    </main>
  )
}

export default App
