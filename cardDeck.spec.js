describe('getDeck', function() {
  it('should return an array of 52 cards', function() {
    const deck = getDeck();
    return deck.length === 52;
  });

  it('each card should have a valid value, suit, and display value', function() {
    const deck = getDeck();
    return deck.every(card => (
      typeof card === 'object' &&
      ['hearts', 'spades', 'clubs', 'diamonds'].includes(card.suit) &&
      ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'].includes(card.displayVal) &&
      typeof card.val === 'number'
    ));
  });
  
  it('should have unique cards in the deck', function() {
    const deck = getDeck();
    const cardSet = new Set(deck.map(card => JSON.stringify(card)));
    return cardSet.size === deck.length;
  });
});
