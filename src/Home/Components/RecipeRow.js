import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

export function RecipeRow(recipe: Recipe) {

    const styles = StyleSheet.create(
    {
        row: {
            borderWidth: 1,
            borderColor: "#888",
            flex: 1,
            flexDirection: 'row'
        },
        title: {
            fontWeight: 'bold',
            fontSize: 16
        }
    });

    return (
        <View style={styles.row}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
            <Text style={styles.title}>{recipe.name.value}</Text>
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