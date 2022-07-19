import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/posts'
import React, {useState} from 'react'

const AddComment = props => {

  const [comment, setComment] = useState("")
  const [editMode, setEditMode] = useState(false)

  
  const handleAddComment = () => {
      props.onAddComment({
        postId: props.postId,
        comment: {
          nickname: props.name,
          comment: comment
        }
      })
      setComment('')
      setEditMode(false)
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

const mapStateToProps = ({ user }) => {
  return {
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: payload => dispatch(addComment(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddComment)

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