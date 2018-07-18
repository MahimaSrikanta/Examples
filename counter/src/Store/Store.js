import {createStore} from 'redux';
import counterReducer from '../Reducer/CounterReducer';
export const  store = createStore(counterReducer);