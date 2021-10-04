import React from "react";

// function TodoItem(props) {
//   return (
//     <div className = "todo-item">
//       <input type="checkbox" checked={props.todo.completed} /> 
//       <p>Task: { props.todo.text }</p>
//     </div>
//   )
// }

// As a class-based component
class TodoItem extends React.Component {
  render() {
    return (
      <div className = "todo-item">
        <input 
          type="checkbox" 
          checked={this.props.todo.completed} 
          onChange={() => this.props.handleChange(this.props.todo.id)}/>
        <p>Task: { this.props.todo.text }</p>
      </div>
    )
  }
}

export default TodoItem;