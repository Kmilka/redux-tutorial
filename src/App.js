import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import VisibilityFilters from './components/VisibilityFilters.js';
import {addTodo, toggleTodo, setVisibilityFilters} from './actions.js';

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter,
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: (input) => dispatch(addTodo(input)),
    updateFilter: (filter) => dispatch(setVisibilityFilters(filter)),
    updateStatus: (index) => dispatch(toggleTodo(index)),
  }
}


class App extends Component {
  render() {
    const { todos, visibilityFilter, createTodo, updateFilter, updateStatus } = this.props;
    return (
      <div>
        <TodoInput onSubmit={createTodo} />
        <VisibilityFilters onFilter={updateFilter} />
        <TodoList list={todos} onClick={updateStatus} filter={visibilityFilter} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);