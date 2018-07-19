import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Store} from './Store/Store';
import Main from './Components/Main';



class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
