import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const SelectedIndex = (index) => {
		setSelectedIndex(index)
	}
	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category, index) => {
					return (
						<TouchableOpacity
							onPress={() => SelectedIndex(index)}
							key={index}
							style={{
								backgroundColor:
									index === selectedIndex ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
								marginRight: 36,
								borderRadius: 8,
								paddingHorizontal: 16,
								paddingVertical: 10,
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.1,
								shadowRadius: 7,
								marginVertical: 16,
							}}
						>
							<Text
								style={{
									color: index === selectedIndex ? colors.COLOR_LIGHT : colors.COLOR_DARK_ALT,
									fontSize: 16,width:70,textAlign:'center'
								}}
							>
								{category.category}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
