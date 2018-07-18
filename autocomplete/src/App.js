import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Input from './Components/Input';
import Suggestions from './Components/Sugesstions';
import {store} from './Store/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Input />
          <Suggestions />
        </div>
      </Provider>
    );
  }
}

export default App;
