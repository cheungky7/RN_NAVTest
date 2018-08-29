import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
//import { width } from 'window-size';


/*const typographyData = [
  { value: 'Display2', label: 'Display 2' },
  { value: 'Display1', label: 'Display 1' },
  { value: 'Headline' },
  { value: 'Title' },
  { value: 'Subheading' },
  { value: 'Body' },
  { value: 'Caption' },
];*/

const locale=[
 
  {value: 'en',label:'English'},
  {value: 'tw',label:'中文'},

];

export default class Screen1 extends React.Component {
  
    render() {
      return (
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
          <Text>Setting</Text>
          <Dropdown
            containerStyle={{width: 100, height: 80,}}
           
            label='Language'
            data={locale}
           />
        </View>
      )
    }
  }
