import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from  'react-redux'
import { login } from '../store/actions/user'
import React, {useState, useEffect} from 'react'

const Login = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoad, setLoad] = useState(false)
  const [password, setPassword] = useState("")

  useEffect(() => {
    if(!props.isLoading && isLoad ){
      props.navigation.navigate('Profile')
      setLoad(false)
    }
  },[props.isLoading])

  const login = () => {
    props.onLogin({ name, email, password})
    setLoad(true)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Email' 
        style={styles.input}
        autoFocus={true} 
        keyboardType='email-address' 
        value={email} 
        onChangeText={email => setEmail(email)}
      />
      <TextInput 
        placeholder='Passwarod' 
        style={styles.input}
        secureTextEntry={true}
        keyboardType='email-address' 
        value={password} 
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = ({user}) => {
  return {
    isLoading: user.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    marginTop: 20,
    width: "90%",
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    padding: 5
  },
  button:{
    marginTop:30,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4286f4'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})