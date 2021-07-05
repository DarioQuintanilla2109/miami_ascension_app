import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from '../navigators/HomeStackNavigator'
import AuthStackNavigator from '../navigators/AuthStackNavigator'

function Navigation() {
  const [user, setUser] = useState(false)

  return (
    <NavigationContainer>
      {user ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigation
