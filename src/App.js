import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import '../src/components/TodoComponents/Todo.css';


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      task: ''
    };
  }

  addItem = newTodoText => {
    const newItem = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };


  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  deleteTask = e => {
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.completed
      })

    });
  };

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm value={this.state.task} handleChange={this.handleChanges} addItem={this.addItem} />
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
