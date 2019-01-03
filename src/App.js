import React from 'react';

import Draggable from './Draggable';
import Droppable from './Droppable';

import { AppContainer, WordWrapper } from './styled';

class App extends React.Component {
  state = {
    tasks: [
      {name:"Learn Angular",category:"wip", bgcolor: "white"},
      {name:"", category:"wip", bgcolor:"white"},
      {name:"React", category:"wip", bgcolor:"white"},
      {name:"Vue", category:"complete", bgcolor:"green"}
    ]
  }

  onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
   let id = ev.dataTransfer.getData("id");

   let tasks = this.state.tasks.filter((task) => {
     if (task.name === id) {
       task.category = cat;
     }
     return task;
   });

   this.setState({
     ...this.state,
     tasks
   });
  }

  render() {
    var tasks = {
      wip: [],
      complete: []
    }

    this.state.tasks.forEach ((t) => {
      tasks[t.category].push(
        <Draggable key={t.name} onDragStart={this.onDragStart}
          name={t.name} bgcolor={t.bgcolor} />
      );
    });

    return (
      <AppContainer className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <Droppable groupName="wip"
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}>
          <span>WIP</span>
          <WordWrapper>
            {tasks.wip}
          </WordWrapper>
        </Droppable>
        <Droppable groupName="droppable"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDrop(e, "complete")}>
          <span className="task-header">COMPLETED</span>
          <WordWrapper>
            {tasks.complete}
          </WordWrapper>
        </Droppable>
      </AppContainer>
    );
  }
}

export default App;
