import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator()

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='home' component={home} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
