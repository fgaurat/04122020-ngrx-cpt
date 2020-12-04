import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from './shared/todo.service';
import { map, switchMap} from 'rxjs/operators'
import { loadedTodo } from './todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectsService {
  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType('[Todo Component] load'),
      switchMap( () => this.todoService.getTodos()),
      map(todos => loadedTodo({todos}))
    )
  );


  constructor( private actions$: Actions, private todoService:TodoService) { }
}
