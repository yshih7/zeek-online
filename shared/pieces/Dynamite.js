export default class Dynamite{
  type = "Dynamite";
  //Need link
  sprite = "Dynamite_1.png";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //First check if the direction moving is empty
    if(dir === "up"){
        //Check if it is edge piece to prevent out of bound error
        if(ownPos[0] === 0){
            return [];
        }
        //Check if space moving into is empty
        //If not, do nothing
        if(board[ownPos[0]-1][ownPos[1]] === "X"){
            mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]-1, ownPos[1]]));
            mutation.push(mutations.move([playerPos[0], playerPos[1]], [ownPos[0], ownPos[1]]));
        }else{
            return [];
        }
    }else if(dir === "down"){
        if(ownPos[0] === board.length){
            return [];
        }
        if(board[ownPos[0]+1][ownPos[1]] === "X"){
            mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0]+1, ownPos[1]]));
            mutation.push(mutations.move([playerPos[0], playerPos[1]], [ownPos[0], ownPos[1]]));
        }else{
            return [];
        }
    }else if(dir === "left"){
        if(ownPos[1] === 0){
            return [];
        }
        if(board[ownPos[0]][ownPos[1]-1] === "X"){
            mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]-1]));
            mutation.push(mutations.move([playerPos[0], playerPos[1]], [ownPos[0], ownPos[1]]));
        }else{
            return [];
        }
    }else if(dir === "right"){
        if(ownPos[1] === board.width){
            return [];
        }
        if(board[ownPos[0]][ownPos[1]+1] === "X"){
            mutation.push(mutations.move([ownPos[0], ownPos[1]], [ownPos[0], ownPos[1]+1]));
            mutation.push(mutations.move([playerPos[0], playerPos[1]], [ownPos[0], ownPos[1]]));
        }else{
            return [];
        }
    }//End direction check

    return mutation;
  }
}
