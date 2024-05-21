/**
 * This functional component is used to render list of service types in EditEmail.tsx
 */
import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './style';
import axios from 'axios';

export const MoviesList = ({ navigation }): JSX.Element => {
  const [movieData, setMovieData] = useState([],);
  const [isLoading, setIsLoading] = useState(true);

  const getMoviesList = () => {
    axios.get('http://www.omdbapi.com/?s=fast&apikey=6ce2823c', {
    })
      .then(function (response) {
        console.log("Movie list => ", response?.data?.Search);
        setIsLoading(false);
        setMovieData(response?.data?.Search);
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
    getMoviesList()
  }, []);

  const itemView = useCallback(
    (item: any) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {
          movieItem: item,
        })}>
          <View style={styles.listItemContainer}>
            <Image source={{ uri: item.Poster }} style={styles.imageStyle} />
          </View>
        </TouchableOpacity>
      );
    },
    [],
  );

  const emptyComponent = () => {
    return (
      !isLoading && <View style={styles.noDataContainer}>
        <Text style={styles.titleStyle}>oops! There's no data here!</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {isLoading &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' />
          </View>
        }
        <FlatList
          data={movieData}
          renderItem={({ item }) => itemView(item)}
          key={'_'}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={emptyComponent}
        />
      </View>
    </>
  );
};
export default MoviesList;
