import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Post from '../components/Post'

const Feed = props => {

  let [fontsLoaded] = useFonts({
    'shelter': require('../../assets/fonts/shelter.otf')
  });

  if (!fontsLoaded) {
    return  <ActivityIndicator size="large" color="#00ff00" />
  }

  return (
    <View style={styles.container}>
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

export default connect(mapStateToProps)(Feed);

const styles = StyleSheet.create({})