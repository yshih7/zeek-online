import Apple from "./Apple";
import Ball from "./Ball";
import Barrel from "./Barrel";
import Crystal from "./Crystal";
import DeathGoal from "./DeathGoal";
import DeathSunflower from "./DeathSunflower";
import Dynamite from "./Dynamite";
import Gate from "./Gate";
import Goal from "./Goal";
import Key from "./Key";
import Player from "./Player";
import PurpleTulip from "./PurpleTulip";
import Sunflower from "./Sunflower";
import TreasureChest from "./TreasureChest";
import Wall from "./Wall";
import ClosedTulip from "./ClosedTulip";

//Look up table for the tye of piece
//Useful for converting map data into meaning piece name
const typeList = Object.freeze({
    A : Player,
    B : Wall,
    C : Goal,
    D : DeathGoal,
    E : Sunflower,
    F : TreasureChest,
    G : DeathSunflower,
    H : PurpleTulip,
    I : Apple,
    J : Key,
    K : Gate,
    L : Crystal,
    M : Dynamite,
    N : Barrel,
    O : Ball,
    P : ClosedTulip
});

export default typeList;
