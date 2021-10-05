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
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    }

    return (
      <div className = "todo-item">
        <input 
          type="checkbox" 
          checked={this.props.todo.completed} 
          onChange={() => this.props.handleChange(this.props.todo.id)}/>
        <p style={this.props.todo.completed ? completedStyle : null}>Task: { this.props.todo.text }</p>
      </div>
    )
  }
}

export default TodoItem;