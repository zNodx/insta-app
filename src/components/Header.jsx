import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import icon from '../../assets/imgs/icon.png'
// import { Container } from './styles';

const components = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image}/>
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth:1,
    borderColor: '#BBB'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28
  }
})

export default components;
