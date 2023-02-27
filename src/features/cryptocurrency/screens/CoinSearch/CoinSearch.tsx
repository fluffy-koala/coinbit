import { Screen } from '@components';
import type { FC } from 'react';
import React from 'react';

import { coinApi } from '../../api';
import { CoinList } from '../../components';
import { useSearch } from '../../hooks';
import type { CryptocurrencyStackScreenProps } from '../../navigation';

const CoinSearch: FC<CryptocurrencyStackScreenProps<'CoinSearch'>> = () => {
  const { data: coins = [] } = coinApi.useGetCoinsQuery(null);

  const { SearchInput, results } = useSearch({
    onSearch: (debouncedSearchFormValue) => {
      return coins.filter((coin) => {
        return coin.name
          .toLowerCase()
          .includes(debouncedSearchFormValue.toLowerCase().trim());
      });
    },
  });

  return (
    <Screen>
      <SearchInput />
      <CoinList coins={results} />
    </Screen>
  );
};

export default CoinSearch;
