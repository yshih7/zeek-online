import * as mutations from "./mutations";
import * as mechanics from "./mechanics";

export default class Crystal{
  type = "Crystal";
  static sprite = "Crystal_1.png";
  sprite = "Crystal_1.png";

  constructor(){
    //Just putting it here
  }

  stateList = Object.freeze({
      state_1 : "Crystal_1.png",
      state_2 : "Crystal_2.png"
  });

  update(board, ownPos, dt){
    //If there is a crystal adjacent to it, delete both
    let mutation = [];
    if(ownPos[0] !== 0){
      if(board[ownPos[0]-1][ownPos[1]] instanceof Crystal){
            mutation.push(mutations.deletePiece([ownPos[0]-1, ownPos[1]]));
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
            return mutation;
      }
    }
    if(ownPos[0] !== board.length){
      if(board[ownPos[0]+1][ownPos[1]] instanceof Crystal){
            mutation.push(mutations.deletePiece([ownPos[0]+1, ownPos[1]]));
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
            return mutation;
      }
    }
    if(ownPos[1] !== 0){
      if(board[ownPos[0]][ownPos[1]-1] instanceof Crystal){
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]-1]));
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
            return mutation;
      }
    }
    if(ownPos[1] !== board.width){
      if(board[ownPos[0]][ownPos[1]+1] instanceof Crystal){
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]+1]));
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]]));
            return mutation;
      }
    }
    return mutation;
  }

  collide(board, playerPos, ownPos, dir){
    //Calls the helper function from mechanics
    return mechanics.pushBlock(board, playerPos, ownPos, dir);
  }
}
