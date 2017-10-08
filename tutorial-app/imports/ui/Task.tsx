import * as React from 'react';
 
// Task component - represents a single todo item
export interface TaskProps {
  task: { _id: number; text: string;}
}

export default class extends React.Component<TaskProps,{}> {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
