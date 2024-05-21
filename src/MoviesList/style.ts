/**
 */
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleStyle: {
        color: 'black',
        alignSelf: 'center'
    },
    listItemContainer: {
        alignItems: "center", justifyContent: "center"
    },
    imageStyle: {
        width: 260,
        height: 300,
        borderWidth: 1,
        borderColor: '#d35647',
        resizeMode: 'contain',
        margin: 8, alignSelf: 'center'
    },
    noDataContainer: {
        flex: 1, alignContent: 'center', justifyContent: 'center', alignSelf: 'center'
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
