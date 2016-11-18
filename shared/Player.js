//TODO is this import necessary?
import Piece from "Piece.js";

class Player extends Piece{
  inventory;

  constructor(){
    //Player piece is represented as A
    super("A");
  }

  //Function that attemptes to move the player piece
  //May collide into other piece
  function move(board, ownPos, dir){
    mutation;
    newPos;
    //First check if the direction moving is empty
    if(dir === "up"){
      //Check if it is edge piece to prevent out of bound error
      if(ownPos[0] === 0){
        return;
      }
      //Check if space moving into is empty
      //If not, call collide() onto that object
      //Add to mutation list
      if(board[ownPos[0]-1][ownPos[1]] == "X"){
        mutation.push(muta_gen("moved", [ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
        newPos = [ownPos[0]-1, ownPos[1]];
      }else{
        //Get the mutation from calling collide
        //If it is not null, add to the list of mutation
        //AND if it is moved, set new position for use in checking tullip
        muta = collide(board, [ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]], dir);
        if(muta != null){
          mutation.push(muta);
          if(muta.type = "moved"){
            newPos = [ownPos[0]-1, ownPos[1]];
          }
        }
      }
    }else if(dir === "down"){
      if(ownPos[0] === board.length){
        return;
      }
      if(board[ownPos[0]+1][ownPos[1]] == "X"){
        mutation.push(muta_gen("moved", [ownPos[0], ownPos[1]], [ownPos[0]+1, ownPos[1]]));
        newPos = [ownPos[0]+1, ownPos[1]];
      }else{
        muta = collide(board, [ownPos[0], ownPos[1]], [ownPos[0]+1, ownPos[1]], dir);
        if(muta != null){
          mutation.push(muta);
          if(muta.type = "moved"){
            newPos = [ownPos[0]+1, ownPos[1]];
          }
        }
      }
    }else if(dir === "left"){
      if(ownPos[1] === 0){
        return;
      }
      if(board[ownPos[0]][ownPos[1]-1] == "X"){
        mutation.push(muta_gen("moved", [ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]-1]));
        newPos = [ownPos[0], ownPos[1]-1];
      }else{
        muta = collide(board, [ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]-1], dir);
        if(muta != null){
          mutation.push(muta);
          if(muta.type = "moved"){
            newPos = [ownPos[0], ownPos[1]-1];
          }
        }
      }
    }else if(dir === "right"){
      if(ownPos[1] === board.width){
        return;
      }
      if(board[ownPos[0]][ownPos[1]+1] == "X"){
        mutation.push(muta_gen("moved", [ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]+1]));
        newPos = [ownPos[0], ownPos[1]+1];
      }else{
        muta = collide(board, [ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]+1], dir);
        if(muta != null){
          mutation.push(muta);
          if(muta.type = "moved"){
            newPos = [ownPos[0], ownPos[1]+1];
          }
        }
      }
    }//End direction check

    //Check if tulips adjacent to player position
    //TODO check tulip state
    if()
    {
      //First, check in case of index out of bound
      if(newPos[0] === 0)
      {
        if(board[newPos[0]+1][newPos[1]] == "H" &&
            board[newPos[0]][newPos[1]-1] == "H" &&
            board[newPos[0]][newPos[1]+1] == "H"){
              //Delete player piece and loose
          mutation.push(muta_gen("delete", null, null, null, null, null, false));
          mutation.push(muta_gen("win", null, null, newPos));
        }
      }
      if(newPos[0] === board.length)
      {
        if(board[newPos[0]-1][newPos[1]] == "H" &&
            board[newPos[0]][newPos[1]-1] == "H" &&
            board[newPos[0]][newPos[1]+1] == "H"){
              //Delete player piece and loose
          mutation.push(muta_gen("delete", null, null, null, null, null, false));
          mutation.push(muta_gen("win", null, null, newPos));
        }
      }
      if(newPos[1] === 0)
      {
        if(board[newPos[0]+1][newPos[1]] == "H" &&
            board[newPos[0]-1][newPos[1]] == "H" &&
            board[newPos[0]][newPos[1]+1] == "H"){
              //Delete player piece and loose
          mutation.push(muta_gen("delete", null, null, null, null, null, false));
          mutation.push(muta_gen("win", null, null, newPos));
        }
      }
      if(newPos[1] === board.width)
      {
        if(board[newPos[0]+1][newPos[1]] == "H" &&
            board[newPos[0]-1][newPos[1]] == "H" &&
            board[newPos[0]][newPos[1]-1] == "H"){
              //Delete player piece and loose
          mutation.push(muta_gen("delete", null, null, null, null, null, false));
          mutation.push(muta_gen("win", null, null, newPos));
        }
      }
    }


    return mutation;
  }
}
