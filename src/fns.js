import Constants from './constants.js';

const deal = (cards=0) => {
  console.log('DEAL');
};

const shuffle = (deckType = Constants.Decks.STANDARD) => {
  const deck = [];
  const cards = Constants.Cards;
  const suits = Constants.Suits;
  const cardKeys = Object.keys(cards);
  const suitKeys = Object.keys(suits);

  cardKeys.forEach((cardValue) => {
    switch (deckType) {
      case Constants.Decks.STANDARD:
      case Constants.Decks.STANDARD_JOKER:
        const card = Constants.Cards[cardValue];
        if (card.decks.includes(deckType)) {
          suitKeys.forEach((suitValue) => {
            const suit = Constants.Suits[suitValue];
            if (card.suits.includes(suit)) {
              const preferredName = card.preferredName || card.name;
              const suitName = Constants.Suits[suitValue].name;
              const paddedPreposition = suit.preposition ? Constants.SINGLE_SPACE + suit.preposition + Constants.SINGLE_SPACE: Constants.SINGLE_SPACE;
              const cardDescription = preferredName + paddedPreposition + suitName;
              deck.push(cardDescription);
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

