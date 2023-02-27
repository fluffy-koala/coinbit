import { Box, Paragraph, Screen } from '@components';
import { theme } from '@styles';
import type { FC } from 'react';
import React from 'react';

import CoinPlaceholderIcon from '../../assets/svgs/placeholders/coin.svg';
import { Header } from '../../components';
import type { CryptocurrencyStackScreenProps } from '../../navigation';

const Watchlist: FC<CryptocurrencyStackScreenProps<'Watchlist'>> = () => {
  return (
    <Screen isScrollable>
      <Header box={{ marginBottom: '52px' }} />
      <Box alignItems="center">
        <Box
          as={CoinPlaceholderIcon}
          height="80px"
          marginBottom="16px"
          width="80px"
        />
        <Paragraph
          color={theme.color.codGray}
          textAlign="center"
          variant="headline-2"
        >
          Nothing here yet...
        </Paragraph>
      </Box>
    </Screen>
  );
};

export default Watchlist;
