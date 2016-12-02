export default class Goal{
  type = "Goal";
  sprite = "Goal.png";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //Delete, move piece, win
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.win());
    return mutation;
  }
}
