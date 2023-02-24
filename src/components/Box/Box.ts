import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { border, color, flexbox, space } from 'styled-system';

import type { BoxProps } from './Box.types';

const Box = styled(View)<BoxProps>`
  ${({ gap }) => {
    return css`
      ${gap &&
      `
        gap: ${gap};
      `}
      ${border}
      ${color}
      ${flexbox}
      ${space}
    `;
  }}
`;

export default Box;
