import { Component, EventEmitter, OnInit } from '@angular/core';
import { last } from 'rxjs';
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

  getLastId():number {
    let lastId: number = 0;
    let item:number = 0;

    for (item = 0; item < this.todos.length; item++) {
      if (this.todos[item].id > lastId) {
        lastId = this.todos[item].id;
      }
    }
    return lastId;
  }

  addTodo(title: string) {
    console.log(title);
    this.clear();
    this.todo.id = this.getLastId() + 1;
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
