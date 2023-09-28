import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../Screens/Welcome';
import RecipesList from '../Screens/RecipesList';
import RecipeDetailsScreen from '../Screens/RecipeDetailsScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="RecipesList" component={RecipesList} />
                <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})