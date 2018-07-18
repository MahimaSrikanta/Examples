import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {

  increment= () => {
    this.props.dispatch({ type: 'Increment' });
  }

  decrement= () => {
    this.props.dispatch({type: 'Decrement'})
  }
  render() {
    return (
      <div className="App">
        <div> {this.props.count}</div>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return{
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)