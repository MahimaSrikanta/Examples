const initialState = {
    SelectedWord : "",
}

function SelectedWordReducer (state=initialState, action){
  switch(action.type){
    case "RANDOM SELECT":
    console.log(action.value)
      return{
        SelectedWord: action.value
      }
    default:
      return state;
  }
}

export default SelectedWordReducer;