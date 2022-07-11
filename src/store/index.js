import { combineReducers, createStore } from 'redux'
import user from './reducers/user'

const reducers = combineReducers({
  user
})

export default storeConfig = () => {
  return createStore(reducers)
}