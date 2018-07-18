const initialState= {
    input :'',
}
function InputReducer (state= initialState, action){
    switch(action.type){
        case 'Change':
          return{
              input: action.value
          }
        default:
        return state;
    }
}

export default InputReducer