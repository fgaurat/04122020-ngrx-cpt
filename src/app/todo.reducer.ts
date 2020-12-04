import { createReducer, on } from '@ngrx/store';

export const initialState = [
  {
    "userId": 2,
    "id": 28,
    "title": "nesciunt totam sit blanditiis sit",
    "completed": false,
    "dueDate": 1582620058000
  },
  {
    "title": "fdsfsdfds",
    "completed": true,
    "dueDate": 1607122800000,
    "id": 29
  },
  {
    "title": "fsdfsds",
    "dueDate": 1607122800000,
    "completed": false,
    "id": 30
  }
];

const _todoReducer = createReducer(
  initialState
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
