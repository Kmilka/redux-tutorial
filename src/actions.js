import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS } from './constants.js';
  
  export const addTodo = (input) => {
    return { type: ADD_TODO, input: input }
  }
  
  export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, index: index }
  }
  
  export const setVisibilityFilters = (filter) => {
    return { type: SET_VISIBILITY_FILTERS, filter: filter }
  }