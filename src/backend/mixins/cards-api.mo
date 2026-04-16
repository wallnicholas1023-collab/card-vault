import Types "../types/cards";
import CardsLib "../lib/cards";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

mixin (
  cards : List.List<Types.SportCard>,
  priceHistory : List.List<Types.PriceEntry>,
  portfolioSnapshots : Map.Map<Principal, List.List<Types.PortfolioSnapshot>>,
) {
  var nextCardId : Nat = 1;
  var nextPriceId : Nat = 1;
  public shared ({ caller }) func addCard(
    playerName : Text,
    sport : Text,
    team : Text,
    year : Nat,
    condition : Types.Condition,
    purchasePrice : Float,
    currentValue : Float,
    notes : ?Text,
  ) : async Nat {
    let cardId = CardsLib.addCard(
      cards,
      nextCardId,
      caller,
      playerName,
      sport,
      team,
      year,
      condition,
      purchasePrice,
      currentValue,
      notes,
    );
    nextCardId += 1;
    cardId;
  };

  public shared query ({ caller }) func getCards() : async [Types.SportCard] {
    CardsLib.getCards(cards, caller);
  };

  public shared query ({ caller }) func getCard(id : Nat) : async ?Types.SportCard {
    CardsLib.getCard(cards, id, caller);
  };

  public shared ({ caller }) func updateCard(
    id : Nat,
    playerName : Text,
    sport : Text,
    team : Text,
    year : Nat,
    condition : Types.Condition,
    purchasePrice : Float,
    notes : ?Text,
  ) : async Bool {
    CardsLib.updateCard(cards, id, caller, playerName, sport, team, year, condition, purchasePrice, notes);
  };

  public shared ({ caller }) func deleteCard(id : Nat) : async Bool {
    let deleted = CardsLib.deleteCard(cards, id, caller);
    if (deleted) {
      CardsLib.deletePriceEntriesForCard(priceHistory, id);
    };
    deleted;
  };

  public shared ({ caller }) func addPriceEntry(
    cardId : Nat,
    estimatedValue : Float,
    note : ?Text,
  ) : async Nat {
    // Verify caller owns the card
    switch (CardsLib.getCard(cards, cardId, caller)) {
      case null { Runtime.trap("Card not found or not owned by caller") };
      case (?_card) {};
    };
    let entryId = CardsLib.addPriceEntry(priceHistory, nextPriceId, cardId, estimatedValue, note);
    nextPriceId += 1;
    // Update the card's currentValue with the new estimate
    ignore CardsLib.updateCardValue(cards, cardId, caller, estimatedValue);
    // Take a portfolio snapshot
    let stats = CardsLib.getPortfolioStats(cards, caller);
    CardsLib.recordPortfolioSnapshot(portfolioSnapshots, caller, stats.totalValue);
    entryId;
  };

  public shared query ({ caller }) func getPriceHistory(cardId : Nat) : async [Types.PriceEntry] {
    // Verify caller owns the card
    switch (CardsLib.getCard(cards, cardId, caller)) {
      case null { Runtime.trap("Card not found or not owned by caller") };
      case (?_card) {};
    };
    CardsLib.getPriceHistory(priceHistory, cardId);
  };

  public shared query ({ caller }) func getPortfolioStats() : async Types.PortfolioStats {
    CardsLib.getPortfolioStats(cards, caller);
  };

  public shared query ({ caller }) func getPortfolioHistory() : async [Types.PortfolioSnapshot] {
    CardsLib.getPortfolioHistory(portfolioSnapshots, caller);
  };
};
