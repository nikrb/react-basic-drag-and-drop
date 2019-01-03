import React from 'react';

class Draggable extends React.Component {
  onDragStart(e) {
    const { onDragStart, name } = this.props;
    onDragStart(e, name)
  }
  render() {
    const { name, bgcolor } = this.props;
    return (
      <div
        onDragStart={this.onDragStart.bind(this)}
        draggable
        className="draggable"
        style = {{backgroundColor: bgcolor}}
      >
        {name}
      </div>
    );
  }
}

export default Draggable;
