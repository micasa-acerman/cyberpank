import styled from 'styled-components';
import { baseTheme } from '../../../constants/theme';

export const TextField = styled.input`
  background: ${baseTheme.colors.bg};
  padding: 0.4em;
  border: 2px solid ${baseTheme.colors.black};
  box-sizing: border-box;
  outline: 0;
`;
