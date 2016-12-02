export default class Sunflower{
  type = "Sunflower";
  //Need link
  sprite = "Sunflower.png";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //Eat piece and increment score
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.incrementScore(10));
    return mutation;
  }
}
