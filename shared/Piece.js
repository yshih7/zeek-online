class Piece{
  type;
  sprite;

  //Lookup table for the type of mutation
  mutationList.enum = {
    moved,
    deleted,
    increment,
    win,
    edit
  }

  //Look up table for the tye of piece
  //Useful for converting map data into meaning piece name
  typeList.enum = {
    A : Player,
    B : Wall,
    C : Goal,
    D : Death Goal,
    E : Sunflower,
    F : Treasure Chest,
    G : Death Sunflower,
    H : Purple Tulip,
    I : Apple,
    J : Key,
    K : Gate,
    L : Crystal,
    M : Dynamite,
    N : Barrels,
    O : Balls
  }

  //Lookup table to the URL of the sprite
  sprite.enum = {
    //TODO need actual link
    //Enum for URL of the sprite
    Player : "",
    Wall : "",
    Goal : "",
    Death Goal : "",
    Sunflower : "",
    Treasure Chest : "",
    Death Sunflower : "",
    Purple Tulip : "",
    Apple : "",
    Key : "",
    Gate : "",
    Crystal : "",
    Dynamite : "",
    Barrels : "",
    Balls : ""
  }

  constructor(type){
    //Assign the type of piece and associate URL of sprite to it
    //TODO how to reference the enum dynamically
    this.type = typeList.enum.type;
    sprite = sprite.enum.type;
  }

  update(board, ownPos, dt){
    mutation;
    //TODO updates the board
    return mutation;
  }

  collide(board, dir){
    mutation;
    //TODO check for collision
    return mutation;
  }

}
