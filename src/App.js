import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Todos from './components/Todos'
import Header from './components/layout'
import Todoadd from './components/add'
import about from './components/pages/about'
import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  complete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  remove = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addTodo = (title => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    
  })

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todoadd addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} complete={this.complete} remove={this.remove}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={about} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
