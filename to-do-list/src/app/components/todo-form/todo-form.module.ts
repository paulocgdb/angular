import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodoFormRoutingModule} from "./todo-form-routing.module";
import {TodoFormComponent} from "./todo-form.component";

@NgModule({
  imports: [
    CommonModule,
    TodoFormRoutingModule
  ],
  declarations: [TodoFormComponent]
})
export class TodoFormModule {
}
