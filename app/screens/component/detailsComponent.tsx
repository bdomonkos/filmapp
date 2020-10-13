// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, {FC, ReactElement} from 'react';
import {View, Text, Linking} from 'react-native';
import {DescriptionPage} from '../../types/types';

import {
  TEXT_NO_IMDB_LINK,
  TEXT_NO_WIKIPEDIA_LINK,
  TEXT_WIKIPEDIA_LINK,
  TEXT_IMDB_LINK,
} from '../../consts';
import style from '../../style';

export const DescriptionPageComponent: FC<DescriptionPage> = ({
  description,
  imdbLink,
  wikepediaLink,
  title,
  children,
}): ReactElement => {
  return (
    <View style={{height: '100%'}}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.description}>{description}</Text>
      <View style={style.container}>
        {imdbLink ? (
          <Text
            style={{...style.href, marginTop: 5}}
            onPress={() => Linking.openURL(imdbLink)}>
            {TEXT_IMDB_LINK}
          </Text>
        ) : (
          <Text>{TEXT_NO_IMDB_LINK}</Text>
        )}
        {wikepediaLink ? (
          <Text
            style={{...style.href, marginTop: 10}}
            onPress={() => Linking.openURL(wikepediaLink)}>
            {TEXT_WIKIPEDIA_LINK}
          </Text>
        ) : (
          <Text>{TEXT_NO_WIKIPEDIA_LINK}</Text>
        )}
        <View style={{marginTop: 15}}>{children}</View>
      </View>
    </View>
  );
};

export default DescriptionPageComponent;
