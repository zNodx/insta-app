import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from "./src/store";
import Navigator from './src/Navigator'

import React from 'react'
import Feed from './src/screens/Feed';

export default App = () => {
  return (
    <Provider store={store()}>
      <Navigator/>
    </Provider>
  )
}

