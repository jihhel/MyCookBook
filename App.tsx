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
import Months from "./types/Months";
import * as Ingredient from "./types/Ingredient";
import Recipe from "./types/Recipe";
import * as WebBrowser from "expo-web-browser";
import SearchableString from './types/SearchableString';
import {Pattern, parsePatterns} from './types/Patterns';
import {forall} from './types/functions';

type Search = string;


export default function App() {
  console.log(Recipe);
  const [filteredRecipes, filterRecipes] = Recipe.useFilteredRecipes();
  const OpenURLButton = (recipe) => {

    return (
      <View style={styles.recipeRow}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
          <Text style={styles.recipeTitle}>{recipe.name.value}</Text>
          <View>
            <Text>Ingrédients: {recipe.printIngredients()}.</Text>
          </View>
        </View>

        <Button
          title='Voir la recette'
          onPress={WebBrowser.openBrowserAsync.bind(this, recipe.url)}
        />
      </View>
    );
  };

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
          renderItem={(row) => OpenURLButton(row.item)}
          keyExtractor={(item) => item.name.value}
        />
      </View>
      <View style={styles.column} />
    </View>
  );
  return null;
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
  },
  recipeRow: {
    borderWidth: 1,
    borderColor: "#888",
    flex: 1,
    flexDirection: 'row'
  },
  recipeTitle: {
    fontWeight: 'bold',
    size: 16
  }
});
