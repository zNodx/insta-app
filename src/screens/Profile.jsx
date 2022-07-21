import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { Gravatar } from 'react-native-gravatar'
import React, {useState} from 'react'

const Profile = props => {
  const logout = () => {
    props.onLogout()
     props.navigation.navigate('Auth')
  }
 


  const [user, setUser ]= useState({ 
    email: props.email,
    secure: true 
  })
  
  return (
    <View style={styles.container}>
      <Gravatar options={user} style={styles.avatar}/>
      <Text style={styles.nickname}>{props.name}</Text>
      <Text style={styles.email}>{props.user.email}</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

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