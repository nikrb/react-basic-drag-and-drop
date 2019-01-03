import React from 'react';

export default class Droppable extends React.Component {
  onDrop(e) {
    const { groupName, onDrop } = this.props;
    onDrop(e, groupName);
  }
  render() {
    const { onDragOver } = this.props;
    return (
      <div
        onDragOver={onDragOver}
        onDrop={this.onDrop.bind(this)}>
        {this.props.children}
      </div>
    );
  };
};
