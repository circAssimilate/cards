import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './constants.js';
import Fns from './fns.js';

window.Constants = Constants;
window.Fns = Fns;


export class App extends React.Component {
  state = {
    chosenDeck: Constants.Decks.STANDARD,
    deck: [],
    output: '',
  }

  actionButton = () => {
    this.setState({
      deck: Fns.shuffle(this.state.chosenDeck),
    });

    this.setState((previousState)=> {
      return {
        output: previousState.deck.join(Constants.LINE_BREAK),
      };
    });
  };

  __setPropertyFromEvent = (event, property, value, shouldNegate = false) => {
    const valueToSet = shouldNegate ? !event.target[value] : event.target[value];
    this.setState({
      [property]: valueToSet,
    });
  };

  render() {
    return (
      <div className="flex flex-direction--column soft flex--1">
        <h1 className="push--ends">Cards</h1>
        <div className="flex">
          <select
            className="flex--1 push--ends push--right"
            onChange={_.partialRight(this.__setPropertyFromEvent, 'chosenDeck', 'value')}>
            { Object.keys(Constants.Decks).map((value, index) => {
              return (
                <option
                  key={index}>
                  {value}
                </option>
              );
            })}
          </select>
          <button
            className="flex--3 push--ends push--left"
            onClick={this.actionButton}>
            Shuffle
          </button>
        </div>
        <label
          className="push--ends"
          htmlFor="output">
          Deck: {`${this.state.deck.length} Cards`}
        </label>
        <textarea
          className="flex--grow"
          id="output"
          placeholder="Press the button to generate"
          disabled={!this.state.deck.length}
          value={this.state.output} />
      </div>
    );
  }
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
 );

