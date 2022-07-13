import React, {useState} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import icon from '../../assets/imgs/icon.png'
// import { Container } from './styles';

const Header = props => {

  const [name,setName] = useState(props.name || 'Anonymous')
  const gravatar = {email:props.email, secure:true}

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image}/>
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{gravatar.email}</Text>
        <Gravatar options={gravatar} style={styles.avatar}/>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth:1,
    borderColor: '#BBB',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  },
  user:{
    fontSize: 10,
    color: '#000'
  },
  userContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width:30,
    height:30,
    borderRadius:15,
    marginLeft: 10
  }
})

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }
}

export default connect(mapStateToProps)(Header)
