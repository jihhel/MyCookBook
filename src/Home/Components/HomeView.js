import React, { useState, useRef } from "react";
import {
    View,
    TextInput,
    FlatList,
    Button,
    Text
} from "react-native";
import {filterRecipes} from "../../Types/Recipe";
import {RecipeRow} from './RecipeRow';
import HomeAPI from '../API/HomeAPI';
import styles from './styles';

export default function HomeView() {
    const [localRecipes, setLocalRecipes] = useState(HomeAPI.getLocalRecipes());
    const [filteredRecipes, setFilteredRecipes] = useState(localRecipes);
    const [textSearch, setTextSearch] = useState("");
    const textRef = useRef();

    async function updateMarmitonRecipes() {
        const marmitonRecipes = await HomeAPI.getMarmitonRecipes(textSearch);
        updateDisplayedRecipes(marmitonRecipes);
    }

    function updateDisplayedRecipes(marmitonRecipes) {
        const newFilteredRecipes = filterRecipes(localRecipes, textSearch);
        setFilteredRecipes(newFilteredRecipes.concat(marmitonRecipes));
    }

    return (
        <View style={styles.layout}>
            <View style={styles.desktopCentralColumn}>

                <View style={styles.header}>
                    <Text style={styles.mainTitle}>MyCookBook</Text>
                </View>

                <View style={styles.researchContainer}>
                    <Text style={styles.researchLabel}>Chercher une recette</Text>
                    <View style={styles.searchBar}>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={setTextSearch}
                            value={textSearch}
                        />
                        <Button
                            title="Chercher !"
                            style={styles.searchButton}
                            onPress={updateMarmitonRecipes}
                            color='#ff034d'
                        />
                    </View>
                </View>

                <View style={styles.searchResults}>
                    <FlatList
                        data={filteredRecipes}
                        renderItem={(row) => RecipeRow(row.item)}
                        keyExtractor={(item) => item.name.value}
                    />
                </View>

            </View>
        </View>
    );
}