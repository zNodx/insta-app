import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./constants";
import { GOOGLE_API, API_KEY } from '@env'
import axios from 'axios'


export const login = user => {

  return { 
    type: USER_LOGGED_IN,  
    user 
  }

}

export const logout = () => {
  return {
    type: USER_LOGGED_OUT
  }
}

export const createUser = (user) => {
  return dispatch => {
    axios.post(`${GOOGLE_API}/signupNewUser?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken:true
    })
      .catch(err => console.log(err))
      .then(res => {})
  }
}