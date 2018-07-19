import React, {Component} from 'react';
import {connect} from 'react-redux';

const wordsList = ["Unlucky", "Hate", "Disaster", "Mahima", "Elephant"];
class Input extends Component {
  state={
    inputValue:""
  }
  componentDidMount=()=>{
    //Select a word
    let index = Math.round(Math.random()* (wordsList.length - 1) + 0);
    this.props.dispatch({type: 'RANDOM SELECT', value:wordsList[index]})
  }
  handleInputValue=(event)=>{
    this.setState({inputValue: event.target.value});
  }
  handleGuessWord =()=> {
    let lettersMatching =0;
    let input = this.state.inputValue;
    for(let i=0; i< input.length; i++){
      if(this.props.SelectedWord.indexOf(input[i]) !== -1){
        lettersMatching++;
      }
    }
    if(lettersMatching ===this.props.SelectedWord.length){
        this.props.dispatch({type:'WON'})
    }else{
      this.props.dispatch({type:'GUESS', value: this.state.inputValue, letters: lettersMatching});
    }
  }
  render(){
    return(
    <div>
      <input onChange={this.handleInputValue} value={this.state.inputValue}/>
      <button onClick={this.handleGuessWord}> Guess </button>
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    SelectedWord: state.SelectWordReducer.SelectedWord,
  }
}

export default connect(mapStateToProps)(Input);