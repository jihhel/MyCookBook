import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import logo from "./assets/logo.png";
import Months from "./src/Types/Months";
import * as Ingredient from "./src/Types/Ingredient";
import {useFilteredRecipes} from "./src/Types/Recipe";
import SearchableString from './src/Types/SearchableString';
import {Pattern, parsePatterns} from './src/Types/Patterns';
import {forall} from './src/Types/functions';
import {RecipeRow} from './src/Home/Components/RecipeRow';

type Search = string;

export default function App() {
  const [filteredRecipes, filterRecipes] = useFilteredRecipes();
  
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
