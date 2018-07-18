import React, {Component} from 'react';
import {connect} from 'react-redux';

class Input extends Component {

  Change = (event) => {
    this.props.dispatch({
      type: 'Change',
      value: event.target.value
    })
  }

  render() {
    return (
      <input onChange={this.Change}value={this.props.value} />
    )
  }
}
function mapStateToProps(state) {
  return {
    input: state.input
  }
}
export default connect(mapStateToProps)(Input);