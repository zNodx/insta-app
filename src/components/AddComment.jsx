import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import React, {useState} from 'react'

const AddComment = () => {

  const [comment, setComment] = useState("")
  const [editMode, setEditMode] = useState(false)

  
  const handleAddComment = () => {
     Alert.alert('Adicionado!', comment)
  }

  const commentArea = () => {}
  if(editMode){
     return(
      <View style={styles.container}>
        <TextInput placeholder='Pode comentar...'
          style={styles.input} autoFocus={true}
          value={comment}
          onChangeText={ comment => setComment(comment)}
          onSubmitEditing={handleAddComment}
        />
        <TWF onPress={() => setEditMode(false)}>
            <FontAwesome name='times' size={15} color='#555'/>
        </TWF>
      </View>
    )
  } else {
     return(
      <TWF onPress={() => setEditMode(true)}>
        <View style={styles.container}>
          <FontAwesome name='comment-o' size={25} color='#555'/>
          <Text style={styles.caption}>
            Adicione um comentário...
          </Text>
        </View>
      </TWF>
    )
  }

  return (
    <View style={{flex:1}}>
      {commentArea}
    </View>
  )
}

export default AddComment 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC'
  },
  input: {
    width: '90%'
  }
})