import { TouchableHighlight } from 'react-native';
import styled, { css } from 'styled-components/native';
import { color, variant } from 'styled-system';

import type { StyledTouchableHighlightProps } from './Button.types';

export const StyledTouchableHighlight = styled(
  TouchableHighlight,
)<StyledTouchableHighlightProps>`
  ${({ disabled, theme }) => {
    return css`
      ${variant({
        variants: theme.variant.button,
      })}
      ${color}

      ${disabled &&
      `
        background-color: ${theme.color.alto};
      `}
    `;
  }}
`;
