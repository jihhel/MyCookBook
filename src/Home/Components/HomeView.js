import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
} from "react-native";
import {useFilteredRecipes} from "../../Types/Recipe";
import {RecipeRow} from './RecipeRow';

export default function HomeView() {

    const [filteredRecipes, filterRecipes] = useFilteredRecipes();

    const styles = StyleSheet.create({
        column: {
            flex: 1
        },
        container: {
            flex: 1,
            backgroundColor: "#fff",
            flexDirection: 'row',
            justifyContent: "center",
        }
    });

    return (
        <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column}>
            <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            onChangeText={filterRecipes}
            />
            <FlatList
            data={filteredRecipes}
            renderItem={(row) => RecipeRow(row.item)}
            keyExtractor={(item) => item.name.value}
            />
        </View>
        <View style={styles.column} />
        </View>
    );
}