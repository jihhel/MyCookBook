import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import styles from './styles';

export function RecipeRow(recipe: Recipe) {

    return (
        <View style={styles.recipeRow}>
            <View style={styles.recipeDetails}>
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