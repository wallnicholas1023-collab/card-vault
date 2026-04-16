import Types "types/cards";
import CardsApi "mixins/cards-api";
import List "mo:core/List";
import Map "mo:core/Map";

actor {
  let cards = List.empty<Types.SportCard>();
  let priceHistory = List.empty<Types.PriceEntry>();
  let portfolioSnapshots = Map.empty<Principal, List.List<Types.PortfolioSnapshot>>();

  include CardsApi(cards, priceHistory, portfolioSnapshots);
};
