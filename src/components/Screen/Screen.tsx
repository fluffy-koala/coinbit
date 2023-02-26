import type { FC } from 'react';
import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { Box } from '../Box';
import { style } from './Screen.styles';
import type { ScreenProps } from './Screen.types';

const Screen: FC<ScreenProps> = ({ children }) => {
  return (
    <Box
      as={ScrollView}
      bounces={false}
      contentContainerStyle={style.scrollViewContentContainer}
      keyboardShouldPersistTaps="handled"
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={style.scrollViewContainer}
    >
      <KeyboardAvoidingView style={style.keyboardAvoidingViewContainer}>
        {children}
      </KeyboardAvoidingView>
    </Box>
  );
};

export default Screen;
