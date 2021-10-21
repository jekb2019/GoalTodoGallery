import styled from 'styled-components/native';

export const TodoContainer = styled.View`
  flex-direction: row;
  height: 50px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.todoBg};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.todoText};
`;

export const CheckTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
