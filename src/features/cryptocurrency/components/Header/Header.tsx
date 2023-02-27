import { Box } from '@components';
import { authenticationSlice } from '@features/authentication';
import { withBox } from '@hocs';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@store';
import { theme } from '@styles';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import SearchButtonIcon from '../../assets/svgs/buttons/search.svg';
import SignOutButtonIcon from '../../assets/svgs/buttons/sign-out.svg';
import type { CryptocurrencyStackScreenProps } from '../../navigation';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<CryptocurrencyStackScreenProps<'Watchlist'>['navigation']>();

  const handleSignOutButtonIconPress = () => {
    dispatch(authenticationSlice.actions.signOut());
  };

  const handleSearchButtonIconPress = () => {
    navigation.navigate('CoinSearch');
  };

  return (
    <Box alignItems="center" flexDirection="row" justifyContent="space-between">
      <TouchableOpacity onPress={handleSignOutButtonIconPress}>
        <SignOutButtonIcon stroke={theme.color.roman} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSearchButtonIconPress}>
        <SearchButtonIcon />
      </TouchableOpacity>
    </Box>
  );
};

export default withBox(Header);
