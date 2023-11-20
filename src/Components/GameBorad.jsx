import {useState} from "react"

const InitailGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBorad() {
    const [GameBoard, setGameBoard] = useState(InitailGameBorad);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBorad = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBorad[rowIndex][colIndex] = "X";
            return updatedBorad;
            
        });
    
}

    return <ol id="game-board">
        {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>{row.map((playerSymbol, colIndex) => <li key={colIndex}> <button onClick={() => handleSelectSquare(rowIndex , colIndex)}>{playerSymbol}</button></li>)}</ol>
        </li>)}
    </ol>


}

