import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Image } from 'react-native'
import DT from '../../darkTheme'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

function DetailsView({ navigation }) {
  const MyDarkTheme = DT()

  const ARCHITECTURE = [{ image: require('../images/m1.jpg') }]

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={styles.card}
          data={ARCHITECTURE}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.imgStyle} />
          )}
        />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  card: {
    marginTop: windowHeight / 9,
  },
  wrapperStyle: {
    padding: 0,
    margin: 0,
  },
  imgStyle: {
    height: 400,
    maxWidth: '100%',
    borderRadius: 25,
  },
})

export default DetailsView
