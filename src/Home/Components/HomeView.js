import React, {useEffect, useState, useCallback, useRef} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
} from "react-native";
import {filterRecipes} from "../../Types/Recipe";
import {RecipeRow} from './RecipeRow';
import HomeAPI from '../API/HomeAPI';

export default function HomeView() {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [localRecipes, setLocalRecipes] = useState(HomeAPI.getLocalRecipes());
    const [marmitonRecipes, setMarmitonRecipes] = useState([]);
    const [textSearch, setTextSearch] = useState("");
    const textRef = useRef();

    useEffect(() => {
        if (textRef.current !== textSearch) {
            textRef.current = textSearch;
            updateMarmitonRecipes();
        }
    });

    useCallback(() => {
        updateMarmitonRecipes();
    }, [textRef]);

    async function updateMarmitonRecipes() {
        const recipes = await HomeAPI.getMarmitonRecipes(textSearch);
        setMarmitonRecipes(recipes);
        updateDisplayedRecipes();
    }

    function updateDisplayedRecipes() {
        const newFilteredRecipes = filterRecipes(localRecipes.concat(marmitonRecipes), textSearch);
        setFilteredRecipes(newFilteredRecipes);
    }

    async function onSearchChange(search) {
        setTextSearch(search);
        updateDisplayedRecipes();
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

    return (
        <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column}>
            <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            onChangeText={onSearchChange}
            value={textSearch}
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