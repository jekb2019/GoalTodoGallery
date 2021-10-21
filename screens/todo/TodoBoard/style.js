import styled from 'styled-components';

export const TodoBoardContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.mainBg};
`;

export const TodoInputWrapper = styled.View`
  height: 80px;
  padding: 20px 0;
`;

export const TodoListWrapper = styled.View`
  flex: 1;
`;
