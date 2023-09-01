import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#fff",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderRadius: 4,
        height: 50,
        padding: 2,
        width: 300,
        borderWidth: 1,
        borderColor: "gray",
        margin: 3,
        textAlign: 'center'
    },
    button: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 3,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    dropdown: {
        width: 300,
        borderRadius: 4,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        padding: 3
    },
    card: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'gray'
      },
    cardText: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent',
        color: "white"
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    },
    image: {
        borderRadius: 5,
        width: '100%',
    },
    cardContainer: {
        marginRight: 360
    }
    
});