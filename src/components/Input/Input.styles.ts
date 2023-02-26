import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledTextInput = styled(TextInput)`
  ${({ theme }) => {
    return css`
      flex-grow: 1;
      flex-shrink: 1;
      height: 24px;

      padding: 0px;

      color: ${theme.color.codGray};
      font-family: ProximaNova-Regular;
    `;
  }}
`;
