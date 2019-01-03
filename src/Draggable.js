import React from 'react';
import { DraggableWrapper } from './styled';

class Draggable extends React.Component {
  onDragStart(e) {
    const { onDragStart, name } = this.props;
    onDragStart(e, name)
  }
  render() {
    const { name, bgcolor } = this.props;
    return (
      <DraggableWrapper
        onDragStart={this.onDragStart.bind(this)}
        draggable="true"
        bgcolor={bgcolor}
      >
        {name}
      </DraggableWrapper>
    );
  }
}

export default Draggable;
