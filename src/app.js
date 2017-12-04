import { partialRight } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './constants.js';
import Fns from './fns.js';

window.Constants = Constants;
window.Fns = Fns;

const INITIAL_STATE = {
  cardsToDeal: 1,
  chosenDeck: Constants.Decks.STANDARD.key,
  deck: [],
  playerCount: 1,
  players: [],
};

export class App extends React.Component {
  state = INITIAL_STATE;

  handleDealClick = () => {
    
  };

  handleResetClick = () => {
    this.setState(INITIAL_STATE);
  };

  handleShuffleClick = () => {
    this.setState({
      deck: Fns.shuffle(this.state.chosenDeck),
    });
  };

  __setPropertyFromEvent = (event, property, value, options = {}) => {
    let valueToSet = options.shouldNegate ? !event.target[value] : event.target[value];
    valueToSet = options.isNumber ? parseInt(valueToSet) : valueToSet;
    this.setState({
      [property]: valueToSet,
    });
  };

  render() {
    return (
      <div className="flex flex-direction--column soft flex--1">
        <h1 className="push--ends">Card Club</h1>
        <div className="flex">
          <select
            className="push--ends"
            onChange={partialRight(this.__setPropertyFromEvent, 'chosenDeck', 'value')}
            value={this.state.chosenDeck}>
            { Object.keys(Constants.Decks).map((deckKey) => {
              const deck = Constants.Decks[deckKey];
              return (
                <option
                  key={deck.key}
                  value={deck.key}>
                  {deck.name}
                </option>
              );
            })}
          </select>
          <button
            className="push--ends push--left"
            onClick={this.handleShuffleClick}>
            Shuffle
          </button>
          <input
            className="push--ends push--left"
            onChange={partialRight(this.__setPropertyFromEvent, 'playerCount', 'value', { isNumber: true })}
            style={{textAlign: 'center'}}
            type="number"
            value={this.state.playerCount}
          />
          <button
            className="push--ends push--left"
            onClick={this.handleResetClick}>
            Player Reset
          </button>
          <input
            className="push--ends push--left"
            onChange={partialRight(this.__setPropertyFromEvent, 'cardsToDeal', 'value', { isNumber: true })}
            style={{textAlign: 'center'}}
            type="number"
            value={this.state.cardsToDeal}
          />
          <button
            className="push--ends push--left"
            onClick={this.handleDealClick}>
            Player Deal
          </button>
        </div>
        <div className="flex flex-direction--column flex--grow">
          <label
            className="push--ends"
            htmlFor="deck-printout">
            Deck: {`${this.state.deck.length} Cards`}
          </label>
          <textarea
            className="flex--1"
            id="deck-printout"
            placeholder="Press shuffle"
            disabled={!this.state.deck.length}
            value={this.state.deck.join(Constants.LINE_BREAK)}
        />
        </div>
        <div className="flex flex-direction--column flex--grow">
          <div>
            { Object.keys(this.state.players).forEach((playerKey, playerIndex) => {
              const player = this.state.players[playerKey];
              return (
                <div>
                  <label
                    className="push--ends"
                    htmlFor={`player-hand-printout${playerIndex}`}>
                    Player {`${playerIndex + 1}`}
                  </label>
                  <textarea
                    className="flex--grow"
                    id={`player-hand-printout${playerIndex}`}
                    placeholder="Press deal to get more cards"
                    //disabled={!player.cards.length}
                    value={player.cards.join(Constants.LINE_BREAK)}
                />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
 );

