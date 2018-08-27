import React,{ Component } from 'react';
import {View,Text,Button} from 'react-native';
//import Screen1 from './Screen1';


export default class LoginScreen extends Component{

    render(){
        return(
            <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
                <Text>Login in Screen</Text>
                <View>
                <Button
                   title='Login'
                   onPress ={
                       //()=>{ console.log("Pressed!");}
                       () =>this.props.navigation.navigate('Details')
                   }
                />
                 </View>
            </View>
        );
    }

}


