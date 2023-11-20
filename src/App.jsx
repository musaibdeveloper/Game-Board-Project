import Player from "./Components/Player"
import GameBorad from "./Components/GameBorad";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player Initialname="Player 1" symbol="X" />
          <Player Initialname="Player 2" symbol="O" />
        </ol>
        <GameBorad></GameBorad>
      </div>
    
    </main>
  );
}

export default App
