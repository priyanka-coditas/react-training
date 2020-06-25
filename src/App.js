import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/layout/Header";
import AddTodo from "./Components/AddTodo";
// import { v4 as uuid } from "uuid";
import About from "./Components/pages/About";
import axios from "axios";
class App extends React.Component {
  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    }))
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });
    console.log("id", id);
  };

  // /add todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   complete: false,
    // };
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    }).then(res=> this.setState({ todos: [...this.state.todos, res.data] }));
    // this.setState({ todos: [...this.state.todos, newTodo] });
    console.log("title", title);
  };
  // state = {
  //   todos: [
  //     {
  //       id: uuid(),
  //       title: "Take out the trash",
  //       completed: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Dinner with wife",
  //       completed: true,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Meeting with boss",
  //       completed: false,
  //     },
  //   ],
  // };
  state = {
    todos: [
      
    ],
  };
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').
    then(res=>this.setState({todos:res.data}))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
