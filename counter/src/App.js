import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './Store/Store';
import Counter from './Counter/Counter';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
       <Counter />
      </div>
    </Provider>
    );
  }
}

export default App;
