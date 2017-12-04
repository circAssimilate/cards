const LINE_BREAK = '\n';
const SINGLE_SPACE = ' ';

const Decks = {
  STANDARD: {
    key: 'STANDARD',
    name: 'Standard Deck',
  },
  STANDARD_JOKER: {
    key: 'STANDARD_JOKER',
    name: 'Standard Deck (2 Jokers)',
  },
};

const Suits = {
  CLUBS: {
    name: 'Clubs',
    color: 'black',
    preposition: 'of'
  },
  DIAMONDS: {
    name: 'Diamonds',
    color: 'red',
    preposition: 'of'
  },
  HEARTS: {
    name: 'Hearts',
    color: 'red',
    preposition: 'of'
  },
  SPADES: {
    name: 'Spades',
    color: 'black',
    preposition: 'of'
  },
  BIG: {
    name: '(big)',
    color: null,
    preposition: null
  },
  SMALL: {
    name: '(small)',
    color: null,
    preposition: null
  },
};

// TODO Move standard to somewhere better
const Cards = {
  TWO: {
    name: 'Two',
    preferredName: '2',
    rank: [3],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  THREE: {
    name: 'Three',
    preferredName: '3',
    rank: [4],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  FOUR: {
    name: 'Four',
    preferredName: '4',
    rank: [5],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  FIVE: {
    name: 'Five',
    preferredName: '5',
    rank: [6],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  SIX: {
    name: 'Six',
    preferredName: '6',
    rank: [7],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  SEVEN: {
    name: 'Seven',
    preferredName: '7',
    rank: [8],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  EIGHT: {
    nae: 'Eight',
    preferredName: '8',
    rank: [9],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  NINE: {
    name: 'Nine',
    preferredName: '9',
    rank: [10],
    value: 5,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  TEN: {
    name: 'Ten',
    preferredName: '10',
    rank: [11],
    value: 10,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  JACK: {
    name: 'Jack',
    preferredName: null,
    rank: [12],
    value: 10,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  QUEEN: {
    name: 'Queen',
    preferredName: null,
    rank: [13],
    value: 10,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  KING: {
    name: 'King',
    preferredName: null,
    rank: [14],
    value: 10,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  ACE: {
    name: 'Ace',
    preferredName: null,
    rank: [0, 13],
    value: 20,
    decks: [
      Decks.STANDARD.key,
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  JOKER: {
    name: 'Joker',
    preferredName: null,
    rank: [],
    value: 50,
    decks: [
      Decks.STANDARD_JOKER.key,
    ],
    suits: [
      Suits.BIG,
      Suits.SMALL,
    ],
  },
};

export default {
  Cards,
  Decks,
  LINE_BREAK,
  SINGLE_SPACE,
  Suits,
}
