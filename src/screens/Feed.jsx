import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { fetchPosts } from '../store/actions/posts';
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Post from '../components/Post'

const Feed = props => {

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

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps  = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);

const styles = StyleSheet.create({})