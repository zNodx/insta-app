import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Post from '../components/Post'

const Feed = () => {

  const [posts, setPosts] = useState(

    [
      {
        id: Math.random(),
        nickname: 'Rafael Pereira Filho',
        email: 'rafaelperfil@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John Ray Sheldon',
            comment: 'Stunning'
          },
          {
            nickname: 'Ana Julia Arruda',
            comment: 'Foto linda! Onde foi tirada?'
          }
        ]
      },
      {
        id: Math.random(),
        nickname: 'Francisco Pereira Filho',
        email: 'fraperfil@gmail.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: []
      }
    ]
  )

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
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={
          ({item}) => <Post key={item.id} {...item}/>
        }
        />
    </View>
  )
}

export default Feed;

const styles = StyleSheet.create({})