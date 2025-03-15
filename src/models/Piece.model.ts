import { PieceType } from "../enums/Types.enum";
import { TeamType } from "../enums/TeamType.enum";
import { Position } from "./Position.model";

export class Piece {
    image: string;
    position: Position;
    type?: PieceType;
    team?: TeamType;
    constructor(position: Position, type: PieceType,
        team: TeamType) {
      //to be visible images must always be placed inside assets folder
        this.image = `../assets/images/${type}_${team}.png`;
        this.position = position;
        this.type = type;
        this.team = team;
    }

    samePiecePosition(otherPiece: Piece) : boolean {
        return this.position?.samePosition(otherPiece.position);
    }

    samePosition(otherPosition: Position) : boolean {
        return this.position?.samePosition(otherPosition);
    }

}