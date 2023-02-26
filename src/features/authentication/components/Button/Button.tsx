import { Paragraph } from '@components';
import { withBox } from '@hocs';
import { theme } from '@styles';
import type { FC } from 'react';
import React from 'react';

import { UNDERLAY_COLOR_BY_VARIANT } from './Button.constants';
import { StyledTouchableHighlight } from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ disabled, onPress, text, variant }) => {
  return (
    <StyledTouchableHighlight
      disabled={disabled}
      onPress={onPress}
      underlayColor={UNDERLAY_COLOR_BY_VARIANT[variant]}
      variant={variant}
    >
      <Paragraph color={theme.color.white} variant="title-3">
        {text}
      </Paragraph>
    </StyledTouchableHighlight>
  );
};

export default withBox(Button);
