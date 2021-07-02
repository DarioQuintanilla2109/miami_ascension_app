import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import LT from './lightTheme'
import AboutScreen from './src/screens/AboutScreen'
import DetailsView from './src/screens/DetailsView'
import MoreDetails from './src/screens/MoreDetails'
import Home from './src/screens/HomeScreen'
import AuthStackNavigator from './navigators/AuthStackNavigator'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function Root() {
  return (
    <Stack.Navigator header>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='DetailsView'
        component={DetailsView}
      />
      <Stack.Screen name='MoreDetails' component={MoreDetails} />
    </Stack.Navigator>
  )
}

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <AuthStackNavigator />
    </NavigationContainer>
  )
}

export default App
