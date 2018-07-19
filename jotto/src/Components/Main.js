import React from 'react';
import Input from './Input';
import Guess from './GuessedWords';
import Congratulate from './Congratulate';
import {connect} from 'react-redux';

const Main = (props) => {
    return(
      <div>
        {props.won ? <Congratulate /> : 
        <div>
          <Input />  
          <Guess />
        </div>
        }
      </div>
    )
}

function mapStateToProps (state) {
    return{
      won : state.GuessedWordReducer.Won
    }
}

export default connect(mapStateToProps)(Main);