import { StyleSheet, Text, View } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import React from 'react'

const Author = ({email,nickname}) => {
  return (
    <View style={styles.container}>
      <Gravatar options={{email: email, secure: true}} style={styles.avatar}/>
      <Text style={styles.nickname}>{nickname}</Text>
    </View>
  )
}

export default Author

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width:30,
    height:30,
    borderRadius: 15,
    marginHorizontal: 10
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})