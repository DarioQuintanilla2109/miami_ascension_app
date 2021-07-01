import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { Button } from 'react-native-elements'
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler'
import signUpBeach from '../../assets/signUpBeach.jpg'

const DissMissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

function signUp({ navigation }) {
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
      <DissMissKeyboard>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.view}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder='Email'
              placeholderTextColor='rgba(255,255,255, .7)'
            ></TextInput>
            <TextInput
              style={styles.password}
              onChangeText={onPassword}
              value={password}
              placeholder='Password'
              placeholderTextColor='rgba(255,255,255, .7)'
            ></TextInput>

            <Button
              style={{
                alignItems: 'center',
                marginTop: heightPercentageToDP(1),
                color: '#000023',
              }}
              buttonStyle={{
                width: '90%',
                borderRadius: 100,
                margin: 'auto',
                backgroundColor: 'white',
                textAlign: 'center',
                height: 50,
                borderColor: '#000023',
                borderWidth: 1,
              }}
              titleStyle={{
                color: '#000023',
              }}
              containerStyle={{
                borderColor: '#000023',
              }}
              rasied
              title='Sign Up'
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('signIn')}
              style={{ marginTop: heightPercentageToDP(2) }}
            >
              <Text style={styles.text}>
                Already have an
                <Text style={{ color: '#075264' }}> account?</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </DissMissKeyboard>
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
    backgroundColor: '#000023',
    padding: 20,
    fontSize: 18,
    alignSelf: 'center',
    width: '90%',
  },
  password: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: '#000023',
    padding: 20,
    fontSize: 18,
    width: '90%',
    alignSelf: 'center',
  },
  view: {
    marginTop: heightPercentageToDP(20),
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
})

export default signUp
