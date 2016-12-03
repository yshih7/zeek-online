import * as mutations from "./mutations";

export default class PurpleTulip{
  type = "Purple Tulip";
  static sprite = "Tulip_Open.png";
  sprite = "Tulip_Open.png";
  openState = true;

  static stateList = Object.freeze({
      digest_1 : "Tulip_Digest_1.png",
      digest_2 : "Tulip_Digest_2.png",
      digest_3 : "Tulip_Digest_3.png",
      eat_east : "Tulip_Eating_East.png",
      eat_north : "Tulip_Eating_North.png",
      eat_south : "Tulip_Eating_South.png",
      eat_west : "Tulip_Eating_West.png",
      open : "Tulip_Open.png",
      rest : "Tulip_Rest.png"
  });

  constructor(){
    //Just putting it here
  }

  update(board, ownPos, dt){
    //Check if tulips adjacent to player position
    const mutation = [];
    if(ownPos[0] !== 0){
      if(board[ownPos[0]-1][ownPos[1]] instanceof "Player" ||
          board[ownPos[0]-1][ownPos[1]] instanceof "Apple"){
            mutation.push(mutations.deletePiece([ownPos[0]-1, ownPos[1]]));
      }
    }
    if(ownPos[0] !== board.length){
      if(board[ownPos[0]+1][ownPos[1]] instanceof "Player" ||
          board[ownPos[0]+1][ownPos[1]] instanceof "Apple"){
            mutation.push(mutations.deletePiece([ownPos[0]+1, ownPos[1]]));
      }
    }
    if(ownPos[1] !== 0){
      if(board[ownPos[0]][ownPos[1]-1] instanceof "Player" ||
          board[ownPos[0]][ownPos[1]-1] instanceof "Apple"){
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]-1]));
      }
    }
    if(ownPos[1] !== board.width){
      if(board[ownPos[0]][ownPos[1]+1] instanceof "Player" ||
          board[ownPos[0]][ownPos[1]+1] instanceof "Apple"){
            mutation.push(mutations.deletePiece([ownPos[0], ownPos[1]+1]));
      }
    }
    return mutation;
  }

  collide(board, playerPos, ownPos, dir){
    //If player can collide into it, tulip is closed
    //Nothing should be able to move it
    return [];
  }
}
