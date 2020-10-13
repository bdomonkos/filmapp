// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator, Colors, Button} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DescriptionPage} from '../types/types';
import useFetch from './component/fetchHookComponent';
import {DescriptionPageComponent} from './component/detailsComponent';

import {NetworkService} from '../service/api';
import {Helperservice} from '../service/helperService';
import {SelectorService} from '../service/selectorService';
import {TEXT_ERROR, TEXT_CHECK_RELEATED_FILMS} from '../consts';
import style from '../style';

// eslint-disable-next-line react/prop-types
const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const fetchHook = useFetch<DescriptionPage, Error>();
  const {params} = route;
  const {filmTitle,id,onSelect} = params;
  const {response, generalFetch, isLoading, error} = fetchHook;

  const RenderDescriptionPageComponent = () => (
    <View>
      {response && !error && id && filmTitle && onSelect ? (
        <DescriptionPageComponent
          title={response?.title}
          description={response?.description}
          imdbLink={response?.imdbLink}
          wikepediaLink={response?.wikepediaLink}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => {
              navigation.goBack();
              onSelect(id);
            }}>
            {TEXT_CHECK_RELEATED_FILMS}
          </Button>
        </DescriptionPageComponent>
      ) : (
        <Text>{TEXT_ERROR}</Text>
      )}
    </View>
  );

  useEffect(() => {
    if (filmTitle) {
      generalFetch(
        NetworkService.SendGetRequest,
        Helperservice.getWikipediaSearchURI(filmTitle),
        SelectorService.getDescription,
      );
    }
  }, []);
  return (
    <View style={style.indicatorContainer}>
      {isLoading === true ? (
        <ActivityIndicator animating color={Colors.red800} />
      ) : (
        <RenderDescriptionPageComponent />
      )}
    </View>
  );
};
export default DetailScreen;
