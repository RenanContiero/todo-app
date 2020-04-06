import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minha Tarefas';
  public form: FormGroup; // importei

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]

    });
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

 btnSalvar(){
    this.todos.push(new Todo(4,"Fazer coco",false));
 }

}
