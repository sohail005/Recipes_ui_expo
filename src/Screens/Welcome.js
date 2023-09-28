import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={require('../../assets/image/welcome1.png')} />
      <Text style={{ color: '#f96163', fontSize: 22, fontWeight: 'bold' }}>40+ Premium Recipes</Text>
      <Text style={{
        color: '#3c444c', fontSize: 42, fontWeight: 'bold',
        marginTop: 44,
        marginBottom: 40
      }}>Cook Like A Chef</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RecipesList')}
        style={{
          backgroundColor: '#f96163',
          borderRadius: 18,
          paddingVertical: 18,
          alignItems: 'center',
          width: '80%'
        }}>
        <Text style={{ width: '100%', textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#fff' }}>Let`s Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})