import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from "./store";
import {registerRootComponent} from 'expo'
import Navigator from './Navigator'

import React from 'react'

const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}


