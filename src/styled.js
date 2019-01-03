import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DraggableWrapper = styled.div`
  background-color: ${props => props.bgcolor || 'white'};
`;
