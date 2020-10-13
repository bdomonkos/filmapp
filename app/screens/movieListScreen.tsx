// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {List, ActivityIndicator, Colors, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NetworkService} from '../service/api';

import {MovieConnection} from '../types/types';

import {Helperservice} from '../service/helperService';
import {SelectorService} from '../service/selectorService';
import {TEXT_ERROR} from '../consts';
import useFetch from './component/fetchHookComponent';
import style from '../style';

const MovieListScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieID] = useState<number>();
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const fetchHook = useFetch<MovieConnection, Error>();
  const {response, isLoading, error, generalFetch} = fetchHook;
 
 
  const onSelect = (data: number) => {
    setSelectedMovieID(data);
    generalFetch(
      NetworkService.sendPostRequest,
      Helperservice.getReleatedMoviesQuery(data),
      SelectorService.getReleatedMovies,
    );
  };
  useEffect(() => {
    if (searchQuery !== '') {
      setSelectedMovieID(undefined);
      generalFetch(
        NetworkService.sendPostRequest,
        Helperservice.getMoviesQuery(searchQuery),
        SelectorService.getMoviesSearchedMovies,
      );
    }
  }, [searchQuery]);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow:1}}
      onScroll={({nativeEvent}) => {
        if (
          Helperservice.isFetchAfterReachTheBottom(nativeEvent, response) &&
          isLoading === false
        ) {
          const query = Helperservice.getQueryForScrolling(
            selectedMovieId,
            searchQuery,
            response,
          );
          const selector = !selectedMovieId
            ? SelectorService.getMoviesSearchedMovies
            : SelectorService.getReleatedMovies;
          if (query !== null) {
            generalFetch(NetworkService.sendPostRequest, query, selector, true);
          }
        }
      }}
      scrollEventThrottle={4000}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {isLoading === true ? (
        <View style={style.indicatorContainer}>
          <ActivityIndicator animating color={Colors.red800} />
        </View>
      ) : (
        <View>
          {!response && error ? (
            <Text>{TEXT_ERROR}</Text>
          ) : (
            response &&
            response.edges.map((l) => (
              <List.Item
                key={l.node?.id}
                onPress={() => {
                  navigation.navigate('DetailScreen', {
                    filmTitle: l.node?.originalTitle,
                    id: l.node?.id,
                    onSelect,
                  });
                }}
                title={l.node?.originalTitle}
                description={`popularity: ${l.node?.popularityIndex}`}
                // eslint-disable-next-line react/jsx-props-no-spreading
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
};
export default MovieListScreen;
