import Tulip from "./PurpleTulip";

export default class ClosedTulip extends Tulip
{
    static pieceName = "Closed Tulip";
    static sprite = "Tulip_Resting.png";
    static description = "A tulip that will open if Zeek walks by it. If he stays still or walks by it again, it will eat him.";

    constructor()
  {
        super(false);
    }
}
