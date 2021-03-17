import React from 'react'
import { View, Button, Text } from 'react-native'
import DT from '../../darkTheme'
function AboutScreen({ navigation }) {
  const MyDarkTheme = DT()

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: MyDarkTheme.colors.text }}> About sceen</Text>
    </View>
  )
}

export default AboutScreen
