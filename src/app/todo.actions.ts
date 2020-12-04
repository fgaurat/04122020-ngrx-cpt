import { createAction, props } from '@ngrx/store';

export const loadTodo = createAction('[Todo Component] load');
export const loadedTodo = createAction('[Todo Component] loaded',props<{todos:any}>());

