export default class DeathSunflower{
  type = "Death Sunflower";
  sprite = "DeathSunflower.png";

  constructor(){
    //Just putting it here
  }

  collide(board, playerPos, ownPos, dir){
    const mutation = [];
    //Delete, move piece, loose
    mutation.push(mutations.deletePiece(ownPos));
    mutation.push(mutations.move(playerPos, ownPos));
    mutation.push(mutations.deletePiece(ownPos));
    return mutation;
  }
}
