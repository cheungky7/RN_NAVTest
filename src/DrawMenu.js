import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class DrawMenu extends React.Component {


    render() {
        const { navigation } = this.props
        return (
          <View >
            <Text
              onPress={() => navigation.navigate('screen1')}
              >
              Screen 1
            </Text>
            <Text
              onPress={() => navigation.navigate('screen2')}
              >
              Screen 2
            </Text>
            <Text
              onPress={() => navigation.navigate('screen3')}
              >
              Screen 3
            </Text>
            <Text
              onPress={this.logout}
              >
              Log Out
            </Text>
          </View>
        )
      }


}