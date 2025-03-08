

import { HORIZONTAL_AXIS, VERTICAL_AXIS } from '../utils/Constants';
import './ChessBoard.css'

export default function Chessboard() {

    let board = [];

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
        if ((2+ i+j) %2 ===0 ) 
           {board.push(<div className='tile black-tile'> {HORIZONTAL_AXIS[i]} {VERTICAL_AXIS[j]}</div>);}
        else {board.push(<div className='tile white-tile'> {HORIZONTAL_AXIS[i]} {VERTICAL_AXIS[j]}</div>);}


    }}
        return <div id='chessboard'>{board}</div>


}