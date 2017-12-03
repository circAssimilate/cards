const Decks = {
  STANDARD: 'STANDARD',
  STANDARD_JOKER: 'STANDARD_JOKER',
};

const Suits = {
  CLUBS: {
    name: 'Clubs',
    color: 'black',
    standard: true,
  },
  DIAMONDS: {
    name: 'Diamonds',
    color: 'red',
    standard: true,
  },
  HEARTS: {
    name: 'Hearts',
    color: 'red',
    standard: true,
  },
  SPADES: {
    name: 'Spades',
    color: 'black',
    standard: true,
  },
  BIG: {
    name: '(big)',
    color: null,
    standard: false,
  },
  SMALL: {
    name: '(small)',
    color: null,
    standard: false,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
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
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
    ],
    suits: [
      Suits.CLUBS,
      Suits.DIAMONDS,
      Suits.HEARTS,
      Suits.SPADES,
    ],
  },
  JOKER_BIG: {
    name: 'Joker',
    preferredName: null,
    rank: [],
    value: 50,
    decks: [
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
    ],
    suits: [
      Suits.BIG,
    ],
  },
  JOKER_SMALL: {
    name: 'Joker',
    preferredName: null,
    rank: [],
    value: 50,
    decks: [
      Decks.STANDARD,
      Decks.STANDARD_JOKER,
    ],
    suits: [
      Suits.SMALL,
    ],
  },
};

export default {
  Cards,
  Decks,
  Suits,
}
