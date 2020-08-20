import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  id = 1;

  todoList: ITodo[] = [
    { id: 0, description: '', isDone: false }
  ]
  constructor() { }

  addTodo(description: string): void {
    this.todoList.push({
      id: this.id++,
      description,
      isDone: false
    });
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getTodos(): ITodo[] {
    return this.todoList;
  }
}
