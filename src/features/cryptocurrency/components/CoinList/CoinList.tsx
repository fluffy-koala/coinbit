import { Paragraph } from '@components';
import { withBox } from '@hocs';
import { theme } from '@styles';
import type { FC } from 'react';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native';

import type { CoinProps } from '../Coin';
import { Coin } from '../Coin';
import { style } from './CoinList.styles';
import type { CoinListProps } from './CoinList.types';

const CoinList: FC<CoinListProps> = ({ coins }) => {
  const renderItem = ({ item: coin }: ListRenderItemInfo<CoinProps>) => {
    return <Coin id={coin.id} name={coin.name} symbol={coin.symbol} />;
  };

  const keyExtractor = (coin: CoinProps) => {
    return coin.id;
  };

  return (
    <FlatList
      ListEmptyComponent={
        <Paragraph
          color={theme.color.codGray}
          textAlign="center"
          variant="headline-2"
        >
          Nothing here yet...
        </Paragraph>
      }
      bounces={false}
      contentContainerStyle={style.flatListContentContainer}
      data={coins}
      keyExtractor={keyExtractor}
      overScrollMode="never"
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default withBox(CoinList);
