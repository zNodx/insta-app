import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import {FontAwesome} from '@expo/vector-icons'
import AddPhoto from "./screens/AddPhoto";
import Feed from "./screens/Feed";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {registerRootComponent} from 'expo'
import { Provider } from 'react-redux'
import store from "./store";

const authRouter = createStackNavigator({
  Login: {screen: Login, navigationOptions: {title: 'Login'}},
  Register: {screen: Register, navigationOptions: {title: 'Register'}}
},{
   initialRouteName: 'Login'
})

const LoginOrProfileRouter = createSwitchNavigator({
  Profile: Profile,
  Auth: authRouter
}, {
  initialRouteName: 'Auth'
})

const MenuRoutes ={
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({tintColor}) => <FontAwesome name='home' size={30} color={tintColor}/>
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: AddPhoto,
    navigationOptions: {
      title: 'AddPhoto',
      tabBarIcon: ({tintColor}) => <FontAwesome name='camera' size={30} color={tintColor}/>
    }
  },
  Profile: {
    name: 'Profile',
    screen: LoginOrProfileRouter, 
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({tintColor}) => <FontAwesome name='user' size={30} color={tintColor}/>
    }
  }
}

const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel:false
  }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator


