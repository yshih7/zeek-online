import Piece from "Piece.js";

class Game{
  length;     //The VERICAL height of the map
  width;      //The HORIZONTAL width of the map
  map;        //1D array of the map
  board;      //2d array with all the pieces' reference
  playerPos;  //current position of player
  score;      //current score
  bonus;      //bonus score
  initialState;

  constructor(length, width, map){
    //Obtain necessary parameters of the map
    this.length = length;
    this.width = width;
    this.map = map;
    //Construct the board
    build();
  }

  input(Input){
    if(Input.type = "move"){
      move(board, playerPos, Input.dir);
    }else if(Input.type = "reset"){
      //TODO check if this protocol is correct
      score = 0;
      bonus = 0;
      build();
    }
  }

  //Helper function for constructing the board
  build(){
    for(i = 0; i < length; i++ ){
      for(j = 0; i < width; j++ ){
        //Creating new piece based on modular math
        //Check if this is the player piece
        if(){
          board[i][j] = new Player();
          playerPos = {i,j};
        }else{
          //else create normal piece
          board[i][j] = new Piece(map[i*length + j]);
        }

      }k
    }
  }


}
