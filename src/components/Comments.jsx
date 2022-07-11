import { StyleSheet, Text, View}from 'react-native'
import React from 'react'

const Comments = ({comments}) => {
  let view = null

  if(comments){
    view = comments.map((item, index) => {
      return (
        <View style={styles.commentContainer} key={index}>
          <Text style={styles.nickname}>{item.nickname}:</Text>
          <Text style={styles.commet}>{item.comment}</Text>
        </View>
      )
    })
  }
  return (
    <View style={styles.container}>
      {view}
    </View>
  )
} 

export default Comments

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 10
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  nickname:{
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444'
  },
  commet:{
    color: '#555'
  }
})