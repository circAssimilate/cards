console.log('JS Initialized');
import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './constants.js';
import Fns from './fns.js';
console.log('Imports complete');

window.Constants = Constants;
window.Fns = Fns;

// Action button
/*
var $actionButton = document.querySelector('#action');
$actionButton.addEventListener('click', () => {
  var $resultTextarea = document.querySelector('#output');
  $resultTextarea.value = Fns.shuffle().join('\n');
  $resultTextarea.disabled = false;
  console.log('Cards shuffled');
});
*/

window.deal = Fns.shuffle();
console.log(deal);

export class App extends React.Component {
  render() {
    return (
     <div>
        <h1>Cards</h1>
        <select>
        </select>
        <button id="action">Action</button>
        <label htmlFor="output">Result</label>
        <textarea id="output" placeholder="Press the button to generate" disabled="disabled"></textarea>
      </div>
    );
  }
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
 );
console.log('JS Complete');
