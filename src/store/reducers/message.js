import { SET_MESSAGE  } from "../actions/constants";

const initalState = {
  title: '',
  text: ''
}

const reducer = ( state = initalState, action) => {
  switch (action.type) {
    case SET_MESSAGE : 
    return{
      ...state,
      title: action.payload.title,
      text: action.payload.text
    }
    default: 
    return state
  }
}

export default reducer