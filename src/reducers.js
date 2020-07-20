import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS} from './constants.js';
import { combineReducers } from 'redux';

const todos = (state=[], action={}) => {
    switch(action.type) {
        case TOGGLE_TODO:
            return state.map((todo, index) => { return index === action.index ? { ...todo, status: !todo.status} : todo })
        case ADD_TODO:
            if (action.input.trim() === '')
            return state
            else {
                return [...state, {input: action.input, status: false}];
            } 
        default:
            return state;
    }
}

const visibilityFilter = (state=null, action={}) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTERS:
            return action.filter
        default:
            return state;
    }
}

export const todoApp = combineReducers({
    todos,
    visibilityFilter
})