import { Alert, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from "./src/store";
import Navigator from './src/Navigator'
import axios from 'axios'
import React, {useEffect} from 'react'


axios.defaults.baseURL = 'Seu firebase link'

export default App = () => {
  return (
    <Provider store={store()}>
      <Navigator/>
    </Provider>
  )
}
