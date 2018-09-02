import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import I18n from './I18N/i18n'

export default class Screen3 extends React.Component {
  
    render() {
      return (
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
          <Text>{I18n.t('screen')} 3</Text>
        </View>
      )
    }
  }