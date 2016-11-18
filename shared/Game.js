import Piece from "Piece.js";

class Game{
  length;       //The VERICAL height of the map
  width;        //The HORIZONTAL width of the map
  board;        //2D array containing all the pieces
  playerPos;    //current position of player
  score;        //current score
  bonus;        //bonus score
  initialState; //Initial board state, useful for restarting the board

  constructor(length, width, map){
    //Obtain necessary parameters of the map
    this.length = length;
    this.width = width;
    initialState = map;
    score = 0;
    bonus = 0;
    //Construct the board
    build();
  }

  //Function to check the input from user
  //Possible inputs:  Move: Player piece attempts to move
  //                  Reset: Reset the board state
  function input(Input){
    if(Input.type === "move"){
      //move() generates a list of mutation to the board
      //processMutation process that list
      processMutation(move(board, playerPos, Input.dir));
    }else if(Input.type === "reset"){
      score = 0;
      bonus = 0;
      build();
    }
  }

  //Helper function for constructing the board
  function build(){
    for(i = 0; i < length; i++ ){
      for(j = 0; i < width; j++ ){
        //Creating new piece in its respective location
        //Check if this is the player piece
        if(initialState[i*length + j]) === "A" ){
          board[i][j] = new Player();
          //TODO what format is playerPos? right now it's a vector of length two
          playerPos = [i,j];
        }else{
          //else create normal piece
          board[i][j] = new Piece(initialState[i*length + j]);
        }

      }
    }
  }

  //Helper function for processing the list of mutation that
  //is generated from muta_gen() method contained in piece class
  //Processed here in case control flow is required
  function processMutation(mutaList){
    for(const k in mutaList){
      if(k.type==="moved"){
        board[k.new_loc[0]][k.new_loc[1]] = board[k.old_loc[0]][k.old_loc[1]];
        board[k.old_loc[0]][k.old_loc[1]] = new Piece("X");
      }
      if(k.type==="deleted"){
        board[k.loc[0]][k.loc[1]].type = new Piece("X");
      }
      if(k.type==="changed"){
        //Does nothing right now, may need it for sunflower
      }
      if(k.type==="increment"){
        score += k.score;
      }
      if(k.type==="win"){
        //TODO make win or loose do something
      }
      if(k.type==="inventory"){
        //Doesn't do anything right now, it is directly
        //manipulated in piece method
      }
    }
  }


}
