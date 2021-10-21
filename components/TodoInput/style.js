import styled from 'styled-components';
import { COLOR_WHITE } from '../../util/colors';

export const TodoInputContainer = styled.View`
  padding: 0 20px;
`;

export const TodoTextInput = styled.TextInput`
  background-color: ${COLOR_WHITE};
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  padding: 0 20px;
`;
