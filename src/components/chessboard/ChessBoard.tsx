

import { Piece } from '../../models/Piece.model';
import { Position } from '../../models/Position.model';
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from '../../utils/Constants';
import Square from '../square/Square';
import './ChessBoard.css'

interface Props {
  pieces: Piece[];
}

export default function Chessboard({pieces} : Props) {

    let board = [];

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {

           const piece = pieces.find((p) =>
            p.samePosition(new Position(i, j))
          );
          let image = piece ? piece.image : undefined;
    
              board.push(<Square key={`${j},${i}`} image={image} number={2+ i+j} 
                //highlight= {true}
                />);

        }


    }
        return <div id='chessboard'>{board}</div>


}