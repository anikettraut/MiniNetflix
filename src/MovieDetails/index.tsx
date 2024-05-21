/**
 * This functional component is used to render list of service types in EditEmail.tsx
 */
import React, { useEffect, useState, useContext } from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    ActivityIndicator
} from 'react-native'
import styles from './style';
import axios from 'axios';

export const MovieDetails = ({ route, navigation }): JSX.Element => {
    const { movieItem } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState('')
    const getMovieDetail = () => {
        axios.get('http://www.omdbapi.com/', {
            // s: 'fast',
            // apikey: '6ce2823c'
            params: { i: movieItem?.imdbID, apikey: '6ce2823c' },
        })
            .then(function (response) {
                console.log("detail list => ", response?.data);
                setIsLoading(false);
                setMovieDetails(response?.data);
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false)
            })
            .then(function () {
                // always executed
                console.log("Always Execute");
                setIsLoading(false)
            });
    }

    useEffect(() => {
        navigation.setOptions({ title: movieItem?.Title })
        getMovieDetail()
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View> :
                <ScrollView>
                    <Image
                        style={styles.image}
                        source={{ uri: movieItem.Poster }}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{movieItem.Title}</Text>
                        <Text style={styles.genre}>{movieDetails?.Genre}</Text>
                        <Text style={styles.rating}>IMDB Rating - {movieDetails?.imdbRating}</Text>
                        <Text style={styles.rating}> {movieDetails?.Plot}</Text>
                    </View>
                </ScrollView>}
        </View>
    );
};
export default MovieDetails;
