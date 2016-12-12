import Tulip from "./PurpleTulip";

export default class ClosedTulip extends Tulip
{
  static sprite = "Tulip_Rest.png";

  constructor()
  {
    super(false);
  }
}
