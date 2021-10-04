import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import './components/TodoItem.css'
import ContactCard from './components/ContactCard'
import './components/ContactCard.css'
import Joke from './components/Jokes'
import jokesData from './components/jokesData';
import todosData from './components/todosData';
import Counter from './components/Counter_setState'
import './components/Counter_setState.css'



// function App() {
//   const jokeComponents = jokesData.map(ajoke => /*<Joke key={ joke.id } question={ joke.question } punchLine={ joke.punchLine } />) */
//   <Joke key={ajoke.id} jokey={ajoke}/>)

//   const todoComponents = todosData.map(atodo => <TodoItem key={ atodo.id} todo={atodo}/>)
//   return (
//     <div className="todo-list">
//       {todoComponents}
//       {/* <TodoItem /> */}
//       {/* <TodoItem /> */}
//       {/* <TodoItem /> */}
//       <ContactCard 
//         className="contacts"
//         contact = { 
//           {
//           name: "Mr. Whiskerson",
//           imgUrl: "http://placekitten.com/300/200",
//           phone: "(212) 555-1234",
//           email: "mr.whiskaz@catnap.meow"
//           } }
//         />

//       <ContactCard 
//         className="contacts"
//         contact = { 
//           {
//           name: "Mr. Whiskerson",
//           phone: "(212) 555-1234",
//           email: "mr.whiskaz@catnap.meow"
//           } } 
//       />    

//       {jokeComponents}

//     </div>
//   );
// }

// As a class state component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
          
        }
        return todo
      })
      
      return {
        todos: updatedTodos
      }
    })
  }


  render() {
    const todoItems = this.state.todos.map(todo => <TodoItem key={ todo.id } todo={todo} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoItems}
        <Counter />
      </div>
    )  
  }  
}

export default App;
