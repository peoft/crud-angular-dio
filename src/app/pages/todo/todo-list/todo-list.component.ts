import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Array<Todo> = [];
  todo!:Todo;

  constructor() { }

  ngOnInit(): void {
    let items:string = localStorage.getItem('todos') as string;
    let todos = JSON.parse(items);
    if (!todos)  {
      this.todos = [];
    } else {
      this.todos = todos;
    }
  }

  clear():void {
    this.todo = {  
      id: 0,
      title: '',
      done: false
    };    
  }

  addTodo(title: string) {
    console.log(title);
    this.clear();
    this.todo.id = this.todos.length + 1;
    this.todo.title = title;
    this.todos.push(this.todo);
    console.log(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: any) {
    console.log('O pai recebeu ', todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);    
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
