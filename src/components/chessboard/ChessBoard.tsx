

import { HORIZONTAL_AXIS, VERTICAL_AXIS } from '../../utils/Constants';
import Square from '../square/Square';
import './ChessBoard.css'

export default function Chessboard() {

    let board = [];

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
           board.push(<Square number ={2+ i+j}/>);


    }}
        return <div id='chessboard'>{board}</div>


}