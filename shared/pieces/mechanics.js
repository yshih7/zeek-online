import * as mutations from "./mutations";

export function pushBlock(board, playerPos, ownPos, dir){
  //First check if the direction moving is empty
  if(dir === "UP"){
      //Check if it is edge piece to prevent out of bound error
      if(ownPos[0] === 0){
          return [];
      }
      //Check if space moving into is empty
      //If not, do nothing
      if(board[ownPos[0]-1][ownPos[1]] === null){
          mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
      }else{
          return [];
      }
  }else if(dir === "DOWN"){
      if(ownPos[0] === board.length){
          return [];
      }
      if(board[ownPos[0]+1][ownPos[1]] === null){
          mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]+1, ownPos[1]]));
      }else{
          return [];
      }
  }else if(dir === "LEFT"){
      if(ownPos[1] === 0){
          return [];
      }
      if(board[ownPos[0]][ownPos[1]-1] === null){
          mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]-1]));
      }else{
          return [];
      }
  }else if(dir === "RIGHT"){
      if(ownPos[1] === board.width){
          return [];
      }
      if(board[ownPos[0]][ownPos[1]+1] === null){
          mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]+1]));
      }else{
          return [];
      }
  }//End direction check
  return [];
}
