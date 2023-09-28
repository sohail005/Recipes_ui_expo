import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Compponents/Header'
import SearchFilter from '../Compponents/SearchFilter'
import CategoriesFilter from '../Compponents/CategoriesFilter'
import RecipeCard from '../Compponents/RecipeCard'

const RecipesList = ({ }) => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16,marginTop:30 }}>
            <Header headerText={"Hi,John"} headerIcon={"bell-o"} />
            <SearchFilter icon="search" placeholder={"enter your fav recipe"}/>
            <View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>
            {/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1,marginBottom:25 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}
				<RecipeCard />
			</View>
        </SafeAreaView>
    )
}

export default RecipesList

const styles = StyleSheet.create({})