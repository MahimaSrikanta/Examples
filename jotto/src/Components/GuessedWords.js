import React, {Component} from 'react';
import {connect} from 'react-redux';

class GuessedWords extends Component {
  displayGuessWord = () =>{
    return this.props.GuessedWord.map((obj) => {
      return(
        <li key={obj.value}>{obj.value}  has {obj.letters} macthing letters</li>
      )
    })
  }
  render(){
    return(
      <div>
        <ul>
            {this.displayGuessWord()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return({
      GuessedWord : state.GuessedWordReducer.GuessedWords
  })
}

export default connect(mapStateToProps)(GuessedWords);