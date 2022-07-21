import { StyleSheet, FlatList, View, ActivityIndicator,Alert } from 'react-native'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import { setMessage } from '../store/actions/message';
import { StatusBar } from 'expo-status-bar';
import { fetchPosts } from '../store/actions/posts';
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Post from '../components/Post'

const Feed = props => {

  useEffect(() => {
    console.log(props);
    if(props.text && props.text.trim()){
      Alert.alert(props.title || 'Mensagem', props.text)
      props.clearMessage()
    }

  },[props.posts])


  useEffect(() => {

      props.onFetchPosts()

  },[])

  let [fontsLoaded] = useFonts({
    'shelter': require('../../assets/fonts/shelter.otf')
  });

  if (!fontsLoaded) {
    return  <ActivityIndicator size="large" color="#00ff00" />
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true}/>
      <Header/>
      <FlatList
        data={props.posts}
        keyExtractor={item => `${item.id}`}
        renderItem={
          ({item}) => <Post key={item.id} {...item}/>
        }
        />
    </View>
  )
}

const mapStateToProps = ({posts,message}) => {
  return {
    posts: posts.posts,
    title: message.title,
    text: message.text
  }
}

const mapDispatchToProps  = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
    clearMessage: () => {
      dispatch(setMessage({title:'', text:''}))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);

