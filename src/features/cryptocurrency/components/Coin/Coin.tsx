import { Box, Paragraph } from '@components';
import { theme } from '@styles';
import type { FC } from 'react';
import React from 'react';
import { Pressable } from 'react-native';

import LikeButtonIcon from '../../assets/svgs/buttons/like.svg';
import CoinPlaceholderIcon from '../../assets/svgs/placeholders/coin.svg';
import type { CoinProps } from './Coin.types';

const Coin: FC<CoinProps> = ({ id, name, symbol }) => {
  const handleLikeButtonIconPress = () => {
    console.log(id);
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
      <Pressable onPress={handleLikeButtonIconPress}>
        <LikeButtonIcon />
      </Pressable>
    </Box>
  );
};

export default Coin;
