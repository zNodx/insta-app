import { Alert, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from "./src/store";
import Navigator from './src/Navigator'
import axios from 'axios'
import React, {useEffect} from 'react'


axios.defaults.baseURL = 'https://insta-14fea-default-rtdb.firebaseio.com/'

export default App = () => {
  return (
    <Provider store={store()}>
      <Navigator/>
    </Provider>
  )
}
