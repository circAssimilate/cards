import Constants from './constants.js';

const deal = (cards=0) => {
  console.log('DEAL');
};

const shuffle = (deckType = Constants.Decks.STANDARD) => {
  const deck = [];
  const cards = Constants.Cards;
  const cardKeys = Object.keys(cards);
  const suits = Constants.Suits;
  const suitKeys = Object.keys(suits);

  cardKeys.forEach((cardValue, cardIndex) => {
    switch (deckType) {
      // works
      case Constants.Decks.STANDARD:
      case Constants.Decks.STANDARD_JOKER:
        if (Constants.Cards[cardValue].decks.includes(deckType)) {
          suitKeys.forEach((suitValue, suitIndex) => {
            const suit = Constants.Suits[suitValue];
            if (Constants.Cards[cardValue].suits.includes(suit)) {
              const preferredName = Constants.Cards[cardValue].preferredName || Constants.Cards[cardValue].name;
              const suitName = Constants.Suits[suitValue].name;
              if (suit.standard) {
                deck.push(`${preferredName} of ${suitName}`);
              } else {
                deck.push(`${preferredName} ${suitName}`);
              }
            }
          });
        }
        break;
      default:
        console.error('Invalid deck type');
    }
  });
  // Randomly sort cards
  return deck.sort(() => Math.random() - 0.5);
};

export default {
  deal,
  shuffle,
}

