import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DraggableWrapper = styled.div`
  background-color: ${props => props.bgcolor || 'white'};
  margin: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  min-width: 3em;
  border-bottom: 1px solid black;
`;

export const WordWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
