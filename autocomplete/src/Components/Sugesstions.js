import React, {Component} from 'react';
import {connect} from 'react-redux';


const AutoSuggestions = ['Hello', "Hi", "Bye", "Good", "Mahima"];
class Suggestions extends Component {

  suggestions(){
  let result =  AutoSuggestions.filter((data) => {
      return (data.toLowerCase().indexOf(this.props.input.toLowerCase()) === 0 && (this.props.input!== "")) ;
    });
    return result.map((data, index) => {
        return(
          <li key={data+index}>{data}</li>
        )
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.suggestions()}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
    return({
      input: state.input
    })
}
export default connect(mapStateToProps)(Suggestions);