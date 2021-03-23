import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Image } from 'react-native'
import DT from '../../darkTheme'
import { FlatGrid } from 'react-native-super-grid'
import { FlatList } from 'react-native-gesture-handler'

function MoreDetails({ navigation }) {
  const [images, setImages] = useState([
    { image: require('../images/m1.jpg') },
    { image: require('../images/m3.jpg') },
    { image: require('../images/m4.jpg') },
    { image: require('../images/m5.jpg') },
    { image: require('../images/m6.jpg') },
    { image: require('../images/m7.jpg') },
    { image: require('../images/m8.jpg') },
  ])
  const MyDarkTheme = DT()

  return (
    <>
      <Text style={{ color: MyDarkTheme.colors.text }}> Miami</Text>
      <FlatGrid
        itemDimension={130}
        data={images}
        style={styles.gridView}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              style={{
                width: 400,
                height: 400,
                borderRadius: 10,
              }}
              source={item.image}
            />
          </View>
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 40,
    flex: 1,
  },
  itemContainer: {
    paddingLeft: 0,
    paddingEnd: 20,
  },
})

export default MoreDetails
