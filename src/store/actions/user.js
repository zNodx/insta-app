import { LOADING_USER, USER_LOADED, USER_LOGGED_IN, USER_LOGGED_OUT } from "./constants";
import { GOOGLE_API, API_KEY } from '@env'
import axios from 'axios'

const authBaseURL = 'GOOGLE_API'
const API_KEY = 'API_KEY'

export const userLogged = user => {

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
    axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken:true
    })
      .catch(err => console.log(err))
      .then(res => {
        if (res.data.localId){
          axios.put(`/users/${res.data.localId}`.json,{
            name: user.name
          })
            .catch(err => console.log(err))
            .then(res => {
              console.log('Usuário criado com sucesso')
            })
        }
      })
  }
}

export const loadingUser = () => {
  return {
    type: LOADING_USER
  }
}

export const userLoaded = () => {
    return {
      type: USER_LOADED
    }
}

export const login = user => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(err => console.log(err))
      .then(res => {
        if(res.data.localId) {
          axios.get(`/users/${res.data.localId}`.json)
            .catch(err => console.log(err))
            .then( res => {
              console.log(res.data);
              user.password = null
              user.name = res.data.name
              dispatch(userLogged(user))
              dispatch(userLoaded())
            })
        }
      })
  }
}
