import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import I18n from './I18N/i18n'

export default class Screen2 extends React.Component {

  componentWillMount() {
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', payload => {
      console.log(payload);
    });
    this.willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
      console.log(payload);
    });
  }

  componentWillUnount() {
    this.willFocusSubscription.remove();
    this.willBlurSubscription.remove();
  }
  
    render() {
      console.log(this.props);
      return (
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
          <Text>{I18n.t('screen')} 2</Text>
        </View>
      )
    }
  }