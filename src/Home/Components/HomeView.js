import React, {useEffect, useState, useCallback, useRef} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Button,
  Dimensions
} from "react-native";
import {filterRecipes} from "../../Types/Recipe";
import {RecipeRow} from './RecipeRow';
import HomeAPI from '../API/HomeAPI';

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

    const centralColumnWidth = Math.min(Dimensions.get('window').width, 600);

    const styles = StyleSheet.create({
        columnMargins: {
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: 0
        },
        centralColumn: {
            flex: 1, 
            flexBasis: centralColumnWidth
        },
        container: {
            flex: 1,
            backgroundColor: "#fff",
            flexDirection: 'row',
            justifyContent: 'center',
        },
        line: {
            flexDirection: 'row',
            height: 50,
            marginBottom: 50,
            marginTop: 50,
            flex: 1,
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.columnMargins} />
            <View style={styles.centralColumn}>
                <View style={styles.line}>
                    <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1, flex: 2 }}
                    onChangeText={setTextSearch}
                    value={textSearch}
                    />
                    <View>
                        <Button 
                            title="Go !" 
                            style={{flex: 1}}
                            onPress={updateMarmitonRecipes}
                        />
                    </View>
                </View>
                <FlatList
                    data={filteredRecipes}
                    renderItem={(row) => RecipeRow(row.item)}
                    keyExtractor={(item) => item.name.value}
                />
            </View>
            <View style={styles.columnMargins} />
        </View>
    );
}