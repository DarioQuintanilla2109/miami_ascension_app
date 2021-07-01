import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler'
import signUpBeach from '../../assets/signUpBeach.jpg'

function signUp() {
  const [email, onChangeEmail] = useState('')
  const [password, onPassword] = useState('')
  return (
    <ImageBackground
      source={signUpBeach}
      style={{
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        resizeMode: 'contain',
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.view}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder='Enter Email'
            placeholderTextColor='black'
          ></TextInput>
          <TextInput
            style={styles.input}
            onChangeText={onPassword}
            value={password}
            placeholder='Enter Password'
            placeholderTextColor='black'
          ></TextInput>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
  },
  view: {
    marginTop: heightPercentageToDP(20),
  },
})

export default signUp
