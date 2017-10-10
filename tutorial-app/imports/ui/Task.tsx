import * as React from 'react';
import { Meteor } from 'meteor/meteor';
 
// Task component - represents a single todo item
interface TaskProps {
  task: { 
    _id: string; 
    text: string; 
    checked: boolean;
    owner: string;
    username: string;
  }
}

export default class extends React.Component<TaskProps,{}> {  
  toggleChecked = ():void => {
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask = ():void => {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  render() {
    const taskClassName: string = this.props.task.checked ? 'checked' : '';
    
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked}
        />
        <span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
      </li>
    );
  }
}
