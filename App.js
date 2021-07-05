import React from 'react'
import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
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
import HomeStackNavigator from './navigators/HomeStackNavigator'
//import NavigationContainer from './navigators/NavigationContainer'

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
    <>
      <NavigationContainer
        theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}
      >
        <Stack.Navigator initialRouteName='AuthStackNavigator'>
          <Stack.Screen
            name='AuthStackNavigator'
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeStackNavigator'
            component={HomeStackNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
