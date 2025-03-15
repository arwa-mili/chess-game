
import './App.css';
import ChessBoard from './components/chessboard/ChessBoard';
import { TeamType } from './enums/TeamType.enum';
import { PieceType } from './enums/Types.enum';
import { Piece } from './models/Piece.model';
import { Position } from './models/Position.model';



function App() {


  let pieces : Piece[]=[];
  pieces.push(new Piece(new Position(0, 1), PieceType.BISHOP, TeamType.US))
  return (
    <div className="app">
     <ChessBoard pieces={pieces}/>
    </div>
  );
}

export default App;
