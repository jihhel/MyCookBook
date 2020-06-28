import { StyleSheet, Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
   layout: {
       width: WINDOW_WIDTH,
       height: WINDOW_HEIGHT,
   },
    desktopCentralColumn: {
       maxWidth: 0.5 * WINDOW_WIDTH,
       marginHorizontal: 'auto',
        marginVertical: 0,
    },
    header: {
        marginTop: '2rem',
        marginBottom: '1.5rem',
        width: '100%',
    },
    mainTitle: {
        textAlign: 'center',
        fontSize: 30,
    },
    researchContainer: {
        padding: '1.2rem',
        borderRadius: 10,
        borderWidth: 1.4,
        borderColor: '#777',
    },
    researchLabel: {
       marginBottom: '0.5rem',
    },
    searchBar: {
       display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
       marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#eee',
        height: '2rem',
        flex: 1,
        paddingHorizontal: 10,
    },
    searchButton: {
        height: '2rem',
        borderRadius: 10,
    },
    searchResults: {
        marginTop: '1rem',
        paddingHorizontal: '0.8rem',
    },
    recipeRow: {
       display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '0.4rem',
        borderWidth: 0.5,
        borderColor: '#eee',
        borderRadius: 10,
        padding: '0.8rem',
    },
    recipeDetails: {
       display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginRight: 15,
    },
    recipeTitle: {
       fontWeight: 'bold',
    }


});