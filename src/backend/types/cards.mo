import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type Condition = {
    #Mint;
    #NearMint;
    #Excellent;
    #Good;
    #Fair;
    #Poor;
  };

  public type SportCard = {
    id : Nat;
    owner : UserId;
    playerName : Text;
    sport : Text;
    team : Text;
    year : Nat;
    condition : Condition;
    purchasePrice : Float;
    currentValue : Float;
    dateAdded : Timestamp;
    notes : ?Text;
  };

  public type PriceEntry = {
    id : Nat;
    cardId : Nat;
    estimatedValue : Float;
    date : Timestamp;
    note : ?Text;
  };

  public type PortfolioStats = {
    totalCards : Nat;
    totalCost : Float;
    totalValue : Float;
    gainLoss : Float;
  };

  public type PortfolioSnapshot = {
    date : Timestamp;
    totalValue : Float;
  };
};
