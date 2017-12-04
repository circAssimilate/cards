import { partialRight } from 'lodash';
import classNames from 'classnames';
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
  deckHidden: true,
  locked: false,
  needsReshuffled: true,
  playerCount: 1,
  players: [],
};

export class App extends React.Component {
  state = INITIAL_STATE;

  handleDealClick = () => {
    const updateDeck = () => {
      const updatedDeck = this.state.deck;
      let updatedPlayers = this.state.players;
      if ((this.state.cardsToDeal * this.state.playerCount) > this.state.deck.length) {
        alert('Ehhemmmm. The decks needs reshuffled');
        this.setState({
          locked: false,
          needsReshuffled: true,
        });
        return null;
      }
      for (var i = 0; i < this.state.cardsToDeal; i++) {
        updatedPlayers = updatedPlayers.map(player => {
          const updatedPlayer = player;
          const newCard = updatedDeck.shift();
          updatedPlayer.hand.push(newCard);
          return updatedPlayer;
        });
      }

      this.setState({
        deck: updatedDeck,
        players: updatedPlayers,
      });
    };

    const players = this.state.players;
    if (!players.length) {
      this.setState((previousState) => {
        return {
          deck: this.state.deck.length ? this.state.deck : Fns.shuffle(this.state.chosenDeck),
          locked: true,
          players: Fns.createPlayersList(this.state.playerCount),
        };
      }, updateDeck);
      return true;
    }
    updateDeck();
    return false;
  };

  handleDeckHideClick = () => {
    this.setState({
      deckHidden: !this.state.deckHidden,
    });
  }

  handleResetClick = () => {
    this.setState(INITIAL_STATE);
  };

  handleShuffleClick = () => {
    this.setState({
      deck: Fns.shuffle(this.state.chosenDeck),
      needsReshuffled: false,
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
          <input
            className="push--ends"
            disabled={this.state.locked}
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
            disabled={this.state.needsReshuffled}
            onChange={partialRight(this.__setPropertyFromEvent, 'cardsToDeal', 'value', { isNumber: true })}
            style={{textAlign: 'center'}}
            type="number"
            value={this.state.cardsToDeal}
          />
          <button
            className="push--ends push--left"
            disabled={this.state.needsReshuffled}
            onClick={this.handleDealClick}>
            Player Deal
          </button>
          <select
            className="push--ends push--left"
            disabled={this.state.locked}
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
            disabled={this.state.locked}
            onClick={this.handleShuffleClick}>
            Shuffle
          </button>
        </div>
        <div className="flex flex-direction--column flex--grow">
          <label
            className="push--ends"
            htmlFor="deck-printout"
            onClick={this.handleDeckHideClick}>
            Deck: {`${this.state.deck.length} Cards (click to toggle deck visibility)`}
          </label>
          <textarea
            className={classNames({
              "flex--1": true,
              "background-color--black": this.state.deckHidden,
            })}
            id="deck-printout"
            placeholder="Press shuffle"
            disabled={!this.state.deck.length}
            value={this.state.deck.join(Constants.LINE_BREAK)}
          />
        </div>
        <div className="flex flex-direction--row flex--3">
          { this.state.players.map((player, index) => {
            return (
              <div
                className={classNames({
                  'flex': true,
                  'flex-direction--column': true,
                  'push--top': true,
                  'push--right': this.state.players.length !== (index + 1), 
                })}
                key={index}>
                <label
                  className="push--ends"
                  htmlFor={`player-hand-printout-${index}`}>
                  Player {index + 1}
                </label>
                <textarea
                  className="flex--1"
                  id={`player-hand-printout-${index}`}
                  placeholder="Press deal to get more cards"
                  disabled={!player.hand.length}
                  value={player.hand.join(Constants.LINE_BREAK)}
              />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
 );

