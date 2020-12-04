import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { counterReducer } from './counter.reducer';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todoReducer } from './todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffectsService } from './todo-effects.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer,theTodos:todoReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodoEffectsService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
