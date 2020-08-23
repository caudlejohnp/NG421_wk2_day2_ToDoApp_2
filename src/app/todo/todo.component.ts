import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  @Input() todo: ITodo;

  ngOnInit() { }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo);
  }

}
