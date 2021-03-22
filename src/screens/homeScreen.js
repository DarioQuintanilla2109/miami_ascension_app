import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Avatar,
} from 'react-native-paper'
import DT from '../../darkTheme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../images/logo.jpg'

function HomeScreen({ navigation, props }) {
  const MyDarkTheme = DT()

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Avatar.Image source={Logo} />
              <View></View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='home-outline' color={color} size={size} />
              )}
              label='Home'
              onPress={() => {
                navigation.navigate('Root')
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='information-variant' color={color} size={size} />
              )}
              label='About'
              onPress={() => {
                navigation.navigate('About')
              }}
            />
          </Drawer.Section>

          <Drawer.Section>
            <TouchableRipple
              onPress={() => {
                toggleTheme()
              }}
            >
              <View style={styles.preference}>
                <Text style={{ color: MyDarkTheme.colors.text }}>
                  Dark Theme
                </Text>
                <View pointerEvents='none'>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='exit-to-app' color={color} size={size} />
          )}
          label='Sign Out'
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})

export default HomeScreen
