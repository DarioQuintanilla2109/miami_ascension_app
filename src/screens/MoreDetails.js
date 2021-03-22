import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import DT from '../../darkTheme'

function MoreDetails({ navigation }) {
  const MyDarkTheme = DT()

  return (
    <View style={{ flex: 1, marginTop: 90 }}>
      <Text style={{ color: MyDarkTheme.colors.text }}> More</Text>
      <Button
        title='Go to details view'
        onPress={() => navigation.navigate('DetailsView')}
      />
    </View>
  )
}

export default MoreDetails
