import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import { color, flexbox, space, typography, variant } from 'styled-system';

import type { ParagraphProps } from './Paragraph.types';

const Paragraph = styled(Text)<ParagraphProps>`
  ${({ theme }) => {
    return css`
      ${variant({
        variants: theme.variant.typography,
      })}
      ${color}
      ${flexbox}
      ${space}
      ${typography}
    `;
  }}
`;

export default Paragraph;
