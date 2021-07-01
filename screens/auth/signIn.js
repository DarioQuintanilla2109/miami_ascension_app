import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native'

function signIn() {
  const [text, onChangeText] = useState('')
  return (
    <SafeAreaView>
      <View>
        <Text> sign in screen</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})

export default signIn
