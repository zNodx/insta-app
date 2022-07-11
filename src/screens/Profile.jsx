import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import React, {useState} from 'react'

const Profile = props => {
  const logout = () => {
     props.navigation.navigate('Auth')
  }

  const [user, setUser ]= useState({ 
    email:"ffrmateus@gmail.com",
    secure: true 
  })
  
  return (
    <View style={styles.container}>
      <Gravatar options={user} style={styles.avatar}/>
      <Text style={styles.nickname}>Mateus</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  email: {
    marginTop: 20,
    fontSize: 25
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor:'#4286f4'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})