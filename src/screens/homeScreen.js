import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import DT from '../../darkTheme'

function HomeScreen({ navigation }) {
  const MyDarkTheme = DT()

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Text style={{ color: MyDarkTheme.colors.text }}> home sceen</Text>
      <Button
        title='Go to details view'
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'MoreDetails',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  )
}

export default HomeScreen
