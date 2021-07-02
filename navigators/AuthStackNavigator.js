import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import signUp from '../screens/auth/signUp'
import signIn from '../screens/auth/signIn'

const AuthStack = createStackNavigator()

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='signUp' component={signUp} />
      <AuthStack.Screen name='signIn' component={signIn} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
