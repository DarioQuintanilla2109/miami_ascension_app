import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import DT from '../../darkTheme'
import MoreDetails from './MoreDetails'

function DetailsView({ navigation }) {
  const MyDarkTheme = DT()

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: MyDarkTheme.colors.text }}> DetailsView</Text>
    </View>
  )
}

export default DetailsView
