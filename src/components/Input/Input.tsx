import { Box, Paragraph } from '@components';
import type { ComponentProps } from '@hocs';
import { withBox } from '@hocs';
import { theme } from '@styles';
import type { ReactElement } from 'react';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import HidePasswordButtonIcon from '../../assets/svgs/buttons/hide-password.svg';
import ShowPasswordButtonIcon from '../../assets/svgs/buttons/show-password.svg';
import { StyledTextInput } from './Input.styles';
import type { InputProps } from './Input.types';

const Input = <T extends unknown>({
  keyboardType,
  name,
  placeholder,
  withSecuredTextEntry,
}: InputProps<T>) => {
  const [isTextEntrySecured, setIsTextEntrySecured] =
    useState(withSecuredTextEntry);

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
  });

  const handleTextEntrySecurityToggle = () => {
    setIsTextEntrySecured((previousIsTextEntrySecured) => {
      return !previousIsTextEntrySecured;
    });
  };

  return (
    <>
      <Box
        alignItems="center"
        borderBottomColor={!value ? theme.color.gray : theme.color.codGray}
        borderBottomWidth="1px"
        flexDirection="row"
        paddingBottom="4px"
      >
        <StyledTextInput
          autoCapitalize="none"
          cursorColor={theme.color.codGray}
          keyboardType={keyboardType}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={theme.color.gray}
          secureTextEntry={isTextEntrySecured}
          textAlignVertical="center"
          value={value}
        />
        {withSecuredTextEntry && (
          <TouchableOpacity onPress={handleTextEntrySecurityToggle}>
            {isTextEntrySecured ? (
              <ShowPasswordButtonIcon />
            ) : (
              <HidePasswordButtonIcon />
            )}
          </TouchableOpacity>
        )}
      </Box>
      {error && (
        <Paragraph
          color={theme.color.sunsetOrange}
          marginBottom="-22px"
          paddingTop="4px"
          variant="body-3"
        >
          {error?.message}
        </Paragraph>
      )}
    </>
  );
};

export default withBox(Input) as <T>(
  props: ComponentProps<InputProps<T>>,
) => ReactElement<InputProps<T>>;
