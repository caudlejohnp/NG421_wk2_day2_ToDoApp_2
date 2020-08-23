import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  id = 0;
  description = "";

  todoList: ITodo[] = [{ id: 0, description: "", isDone: false }];
  constructor(private modalService: NgbModal) {}

  addTodo(description: string): void {
    this.todoList.push({
      id: this.id++,
      description,
      isDone: false,
    });
    this.description = "";
  }

  async deleteTodo(todo: any) {
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    let answer = "no";
    answer = await modal.result;
    if (answer === "yes") {
      const index = this.todoList.findIndex((todoItem) => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  }

  getTodos(): ITodo[] {
    return this.todoList;
  }
}
