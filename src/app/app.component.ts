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
 }

 add(){
  const title = this.form.controls['title'].value;
  const id = this.todos.length + 1;
  this.todos.push(new Todo(id, title, false));
  this.clear();
 }

 remove(todo: Todo){
  const index = this.todos.indexOf(todo);
  console.log('isso ' + index);
  if(index !== -1){
    this.todos.splice(index, 1); // 1 do parametro é a qdt de itens a ser removido
  }
 }

 clear(){
  this.form.reset();
 }

 markAsDone(todo: Todo){
   todo.done = true;
 }

 markAsUndone(todo: Todo){
  todo.done = false;
 }

}
