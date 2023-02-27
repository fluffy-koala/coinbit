import { theme } from '@styles';
import type { FC } from 'react';
import { createElement } from 'react';
import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { Box } from '../Box';
import { style } from './Screen.styles';
import type { ScreenProps } from './Screen.types';

const Screen: FC<ScreenProps> = ({ children, isScrollable }) => {
  return createElement(
    isScrollable ? ScrollView : (Box as any),
    isScrollable
      ? {
          bounces: false,
          contentContainerStyle: style.scrollViewContentContainer,
          keyboardShouldPersistTaps: 'handled',
          overScrollMode: 'never',
          showsVerticalScrollIndicator: false,
          style: style.scrollViewContainer,
        }
      : {
          backgroundColor: theme.color.white,
          flex: 1,
          paddingBottom: '16px',
          paddingTop: '52px',
          paddingX: '24px',
        },
    <KeyboardAvoidingView style={style.keyboardAvoidingViewContainer}>
      {children}
    </KeyboardAvoidingView>,
  );
};

export default Screen;
