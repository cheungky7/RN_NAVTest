import React, { Component } from 'react';
import {View ,Text} from 'react-native';
import {createStackNavigator,createDrawerNavigator} from 'react-navigation';
import LoginScreen from './src/Login';
//import Screen1 from './src/Screen1';
import Setting from './src/Setting'
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import DrawMenu from './src/DrawMenu';
import store from './src/store';
import { Provider } from 'react-redux';

const DrawerStack = createDrawerNavigator({
    Setting: { screen: Setting },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 },
  },
  {
    contentComponent: DrawMenu
  })


  const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      
     /* if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }*/
     
      navigation.toggleDrawer();
    }
  }>Menu</Text>


const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

const RootStack= createStackNavigator(
   /* Home:{
        screen: LoginScreen
    },
    Menu:{
        screen: DrawerStack
    },*/

     {
        Home: LoginScreen,
        Details: DrawerNavigation,
      },
      {
        initialRouteName: 'Home',
        headerMode: 'none',
      }
);

export default class App extends React.Component{
    render(){
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
      );
    }
}
