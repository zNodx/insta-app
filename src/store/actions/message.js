import { SET_MESSAGE } from "./constants";

export const setMessage = message => {
  return {
    type: SET_MESSAGE,
    payload: message
  } 
}