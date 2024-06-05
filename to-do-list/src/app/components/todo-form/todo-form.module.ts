import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodoFormRoutingModule} from "./todo-form-routing.module";
import {TodoFormComponent} from "./todo-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TodoFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TodoFormComponent]
})
export class TodoFormModule {
}
