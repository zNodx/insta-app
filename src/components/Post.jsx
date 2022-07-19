import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'
const Post = props => {
        const image = props.image 
        const addComment = props.name ? <AddComment postId={props.id}/> : null
  return (
    <View style={styles.container}>
        <Image source={ image } style={styles.image}/>
        <Author email={props.email} nickname={props.nickname}/>
        <Comments comments={props.comments}/>
        {addComment}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3/4,
    resizeMode: 'contain'
  }
})

const mapStateToProps = ({user}) => {
  return {
    name: user.name
  }
}

export default connect(mapStateToProps)(Post)
