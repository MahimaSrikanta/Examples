import {combineReducers} from 'redux';
import SelectWordReducer from '../Reducer/SelectedWordReducer';
import GuessedWordReducer from '../Reducer/GuessedWordReducer';

export default combineReducers({
  SelectWordReducer,
  GuessedWordReducer
});