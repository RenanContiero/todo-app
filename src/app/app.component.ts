import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minha Tarefas';
  public form: FormGroup; // importei

  constructor() {
    this.todos.push(new Todo(1,'Passear com o cachorro',true));
    this.todos.push(new Todo(2,'Ir ao supermercado',false));
    this.todos.push(new Todo(3,'Cortar o cabelo',false));
    console.log(this.todos);
 }

 remove(todo: Todo){
  const index = this.todos.indexOf(todo);
  console.log('isso ' + index);
  if(index !== -1){
    this.todos.splice(index, 1); // 1 do parametro é a qdt de itens a ser removido
  }
 }

 markAsDone(todo: Todo){
   todo.done = true;
 }

 markAsUndone(todo: Todo){
  todo.done = false;
 }

}
