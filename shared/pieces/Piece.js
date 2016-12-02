import * as mutations from "./mutations";
//import Apple from "./Apple";
//import Ball from "./Ball";
import * from "./pieces";
//TODO check if correct


//Look up table for the tye of piece
//Useful for converting map data into meaning piece name
static typeList = Object.freeze({
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
    N : Barrel,
    O : Ball,
    X : Empty
});
