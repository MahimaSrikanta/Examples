const initialState = {
    GuessedWords : [],
    Won: false,
}

function GuessedWordReducer (state=initialState, action){
  switch(action.type){
    case "GUESS":
      return{
        ...state,
       GuessedWords : [...state.GuessedWords, { "value":action.value, "letters":action.letters}]
      }
    case "WON":
      return{
        ...state,
        Won: true,
      }
    default:
      return state;
  }
}

export default GuessedWordReducer;