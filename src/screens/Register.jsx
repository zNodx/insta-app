import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    props.navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Name' 
        style={styles.input}
        autoFocus={true} 
        value={name} 
        onChangeText={name => setName(name)}
      />
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
        value={password} 
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

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
    backgroundColor: '#4286f4',
    borderRadius: 5
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})