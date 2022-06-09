import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/Global'

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button title='Go Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go review' onPress={() => navigation.push('ReviewDetails')} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}