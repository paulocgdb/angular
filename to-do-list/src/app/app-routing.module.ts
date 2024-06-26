import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";

const routes: Routes = [
  {path: '', component: TodoListComponent},
  {
    path: 'todo-form',
    loadChildren: () => import('./components/todo-form/todo-form.module')
      .then(m => m.TodoFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
