import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import DT from '../../darkTheme'

function DetailsView({ navigation }) {
  const MyDarkTheme = DT()

  return (
    <View style={{ flex: 1, marginTop: 90 }}>
      <Text style={{ color: MyDarkTheme.colors.text }}> DetailsView</Text>
      <Button
        onPress={() => navigation.navigate('MoreDetails')}
        title='more details'
      />
    </View>
  )
}

export default DetailsView
