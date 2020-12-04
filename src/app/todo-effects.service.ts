import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { TodoService } from './shared/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectsService {
  loadTodos$ = createEffect(
    () => this.actions$.pipe(

    )
  );


  constructor( private actions$: Actions, todoService:TodoService) { }
}
