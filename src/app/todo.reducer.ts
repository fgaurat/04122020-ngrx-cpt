import { createReducer, on } from '@ngrx/store';
import { loadedTodo } from './todo.actions';

export const initialState = [];

const _todoReducer = createReducer(
  initialState,
  on(loadedTodo , (state,action) => {
    console.log(state)
    console.log(action)
    const newState = action.todos
    return newState
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
