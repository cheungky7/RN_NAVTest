import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
//import { width } from 'window-size';
import {OnChangelocale} from './action/SettingAction';
import I18n from './I18N/i18n'

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

//const onChangeLocale=





export default class Setting extends React.Component {

  

  constructor(props) {
    super(props);

    this.state = {
      userLocale: I18n.locale,
    };
  }
  
    render() {
      return (
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
          <Text>{I18n.t('setting')}</Text>
          <Dropdown
            containerStyle={{width: 100, height: 80,}}
            onChangeText={
              (text)=>{
                //I18n.locale=text;
                //this.setState({Userlocale: text});
                this.props.OnChangelocale(text);
               
               }
            }
            label='Language'
            data={locale}
           />
           <Text>{this.props.userLocale}</Text>
        </View>
      )
    }
  }
