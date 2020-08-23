import { Component, OnInit } from "@angular/core";
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"],
})
export class CreateTodoComponent implements OnInit {
  description: string;
  todoList: ITodo[];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.description);
    this.description = '';
  }
}
