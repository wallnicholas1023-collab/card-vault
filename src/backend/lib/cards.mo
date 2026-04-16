import Types "../types/cards";
import List "mo:core/List";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";

module {
  public type SportCard = Types.SportCard;
  public type PriceEntry = Types.PriceEntry;
  public type Condition = Types.Condition;
  public type PortfolioStats = Types.PortfolioStats;
  public type PortfolioSnapshot = Types.PortfolioSnapshot;

  public func addCard(
    cards : List.List<SportCard>,
    nextId : Nat,
    owner : Principal,
    playerName : Text,
    sport : Text,
    team : Text,
    year : Nat,
    condition : Condition,
    purchasePrice : Float,
    currentValue : Float,
    notes : ?Text,
  ) : Nat {
    let card : SportCard = {
      id = nextId;
      owner = owner;
      playerName = playerName;
      sport = sport;
      team = team;
      year = year;
      condition = condition;
      purchasePrice = purchasePrice;
      currentValue = currentValue;
      dateAdded = Time.now();
      notes = notes;
    };
    cards.add(card);
    nextId;
  };

  public func getCards(
    cards : List.List<SportCard>,
    owner : Principal,
  ) : [SportCard] {
    cards.filter(func(c) { Principal.equal(c.owner, owner) }).toArray();
  };

  public func getCard(
    cards : List.List<SportCard>,
    id : Nat,
    owner : Principal,
  ) : ?SportCard {
    cards.find(func(c) { c.id == id and Principal.equal(c.owner, owner) });
  };

  public func updateCard(
    cards : List.List<SportCard>,
    id : Nat,
    owner : Principal,
    playerName : Text,
    sport : Text,
    team : Text,
    year : Nat,
    condition : Condition,
    purchasePrice : Float,
    notes : ?Text,
  ) : Bool {
    var found = false;
    cards.mapInPlace(
      func(c) {
        if (c.id == id and Principal.equal(c.owner, owner)) {
          found := true;
          { c with
            playerName = playerName;
            sport = sport;
            team = team;
            year = year;
            condition = condition;
            purchasePrice = purchasePrice;
            notes = notes;
          };
        } else {
          c;
        };
      }
    );
    found;
  };

  public func deleteCard(
    cards : List.List<SportCard>,
    id : Nat,
    owner : Principal,
  ) : Bool {
    let sizeBefore = cards.size();
    let filtered = cards.filter(func(c) { not (c.id == id and Principal.equal(c.owner, owner)) });
    let sizeAfter = filtered.size();
    if (sizeAfter < sizeBefore) {
      cards.clear();
      cards.append(filtered);
      true;
    } else {
      false;
    };
  };

  public func deletePriceEntriesForCard(
    priceHistory : List.List<PriceEntry>,
    cardId : Nat,
  ) : () {
    let filtered = priceHistory.filter(func(e) { e.cardId != cardId });
    priceHistory.clear();
    priceHistory.append(filtered);
  };

  public func updateCardValue(
    cards : List.List<SportCard>,
    cardId : Nat,
    owner : Principal,
    newValue : Float,
  ) : Bool {
    var found = false;
    cards.mapInPlace(
      func(c) {
        if (c.id == cardId and Principal.equal(c.owner, owner)) {
          found := true;
          { c with currentValue = newValue };
        } else {
          c;
        };
      }
    );
    found;
  };

  public func addPriceEntry(
    priceHistory : List.List<PriceEntry>,
    nextId : Nat,
    cardId : Nat,
    estimatedValue : Float,
    note : ?Text,
  ) : Nat {
    let entry : PriceEntry = {
      id = nextId;
      cardId = cardId;
      estimatedValue = estimatedValue;
      date = Time.now();
      note = note;
    };
    priceHistory.add(entry);
    nextId;
  };

  public func getPriceHistory(
    priceHistory : List.List<PriceEntry>,
    cardId : Nat,
  ) : [PriceEntry] {
    priceHistory.filter(func(e) { e.cardId == cardId }).toArray();
  };

  public func getPortfolioStats(
    cards : List.List<SportCard>,
    owner : Principal,
  ) : PortfolioStats {
    let ownerCards = cards.filter(func(c) { Principal.equal(c.owner, owner) });
    let totalCards = ownerCards.size();
    let totalCost = ownerCards.foldLeft(0.0, func(acc, c) { acc + c.purchasePrice });
    let totalValue = ownerCards.foldLeft(0.0, func(acc, c) { acc + c.currentValue });
    {
      totalCards = totalCards;
      totalCost = totalCost;
      totalValue = totalValue;
      gainLoss = totalValue - totalCost;
    };
  };

  public func recordPortfolioSnapshot(
    snapshots : Map.Map<Principal, List.List<PortfolioSnapshot>>,
    owner : Principal,
    totalValue : Float,
  ) : () {
    let snap : PortfolioSnapshot = {
      date = Time.now();
      totalValue = totalValue;
    };
    switch (snapshots.get(owner)) {
      case (?list) {
        list.add(snap);
      };
      case null {
        let list = List.empty<PortfolioSnapshot>();
        list.add(snap);
        snapshots.add(owner, list);
      };
    };
  };

  public func getPortfolioHistory(
    snapshots : Map.Map<Principal, List.List<PortfolioSnapshot>>,
    owner : Principal,
  ) : [PortfolioSnapshot] {
    switch (snapshots.get(owner)) {
      case (?list) { list.toArray() };
      case null { [] };
    };
  };
};
