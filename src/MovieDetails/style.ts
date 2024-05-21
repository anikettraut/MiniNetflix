/**
 */
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    image: {
        height: 300,
        width: '100%',
        marginTop: 5,
        resizeMode: "contain",
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    genre: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: 'black'
    },
    rating: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
