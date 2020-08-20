import { Component, OnInit } from "@angular/core";
import { ITodo } from "./interfaces/itodo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Todos";
  todoId: number = 0;
  todoList: ITodo[] = [];
  todoTitle: string;

  ngOnInit() {
    this.todoTitle = "";
    this.todoList = [
      // example of how to make an item in todo list
      { id: this.todoId, title: this.todoTitle, description: "" },
    ];
  }
  addTodo(): void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: "",
    });

    this.todoTitle = "";
    this.todoId++;
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
