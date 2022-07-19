import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from "./src/store";
import Navigator from './src/Navigator'
import axios from 'axios'
import {FIREBASE_LINK} from '@env'
import React from 'react'
import Feed from './src/screens/Feed';

axios.defaults.baseURL = FIREBASE_LINK

export default App = () => {
  return (
    <Provider store={store()}>
      <Navigator/>
    </Provider>
  )
}

