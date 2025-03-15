
import './App.css';
import ChessBoard from './components/chessboard/ChessBoard';
import { TeamType } from './enums/TeamType.enum';
import { PieceType } from './enums/Types.enum';
import { Piece } from './models/Piece.model';
import { Position } from './models/Position.model';



function App() {

  


  let pieces : Piece[]=[];
  for(let i=0;i<8;i++){
    pieces.push(new Piece(new Position(i, 6), PieceType.PAWN, TeamType.US))
  }

  for(let i=0;i<8;i++){
    pieces.push(new Piece(new Position(i, 1), PieceType.PAWN, TeamType.OPPONENT))
  }
  pieces.push(new Piece(new Position(0, 7), PieceType.ROOK, TeamType.US))
  pieces.push(new Piece(new Position(7, 0), PieceType.ROOK, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(7, 7), PieceType.ROOK, TeamType.US))
  pieces.push(new Piece(new Position(0, 0), PieceType.ROOK, TeamType.OPPONENT))

  pieces.push(new Piece(new Position(1, 0), PieceType.KNIGHT, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(6, 0), PieceType.KNIGHT, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(1, 7), PieceType.KNIGHT, TeamType.US))
  pieces.push(new Piece(new Position(6, 7), PieceType.KNIGHT, TeamType.US))


  pieces.push(new Piece(new Position(2, 0), PieceType.BISHOP, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(5, 0), PieceType.BISHOP, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(2, 7), PieceType.BISHOP, TeamType.US))
  pieces.push(new Piece(new Position(5, 7), PieceType.BISHOP, TeamType.US))

  pieces.push(new Piece(new Position(4, 0), PieceType.QUEEN, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(4, 7), PieceType.QUEEN, TeamType.US))

  pieces.push(new Piece(new Position(3, 0), PieceType.KING, TeamType.OPPONENT))
  pieces.push(new Piece(new Position(3, 7), PieceType.KING, TeamType.US))

  return (
    <div className="app">
     <ChessBoard pieces={pieces}/>
    </div>
  );
}

export default App;
