import { Box, Paragraph } from '@components';
import { useAppDispatch, useAppSelector } from '@store';
import { theme } from '@styles';
import type { FC } from 'react';
import React from 'react';
import { Pressable } from 'react-native';

import LikeButtonIcon from '../../assets/svgs/buttons/like.svg';
import CoinPlaceholderIcon from '../../assets/svgs/placeholders/coin.svg';
import { coinSelectors, coinSlice } from '../../store';
import type { CoinProps } from './Coin.types';

const Coin: FC<CoinProps> = ({ id, name, symbol }) => {
  const isCoinLiked = useAppSelector((state) => {
    return coinSelectors.selectIsCoinLiked(state, id);
  });

  const dispatch = useAppDispatch();

  const handleLikeButtonIconPress = () => {
    dispatch(
      isCoinLiked
        ? coinSlice.actions.dislikeCoin(id)
        : coinSlice.actions.likeCoin(id),
    );
  };

  return (
    <Box
      alignItems="center"
      border={`1px solid ${theme.color.pampas}`}
      flexDirection="row"
      paddingX="16px"
      paddingY="8px"
    >
      <Box as={CoinPlaceholderIcon} marginRight="12px" />
      <Box flexGrow={1} flexShrink={1} marginRight="12px">
        <Paragraph
          color={theme.color.codGray}
          marginBottom="4px"
          variant="title-2"
        >
          {symbol}
        </Paragraph>
        <Paragraph color={theme.color.codGray} variant="body-2">
          {name}
        </Paragraph>
      </Box>
      <Pressable
        hitSlop={{ bottom: 8, left: 8, right: 8, top: 8 }}
        onPress={handleLikeButtonIconPress}
      >
        <LikeButtonIcon
          fill={isCoinLiked ? theme.color.roman : theme.color.white}
        />
      </Pressable>
    </Box>
  );
};

export default Coin;
