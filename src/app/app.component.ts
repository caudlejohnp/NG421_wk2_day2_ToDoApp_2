import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any[] = [];
  todoTitle: string;
  todoId: number = 0;

  constructor(private modalService: NgbModal) {
    
  }
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      {title: 'Install Angular CLI', isDone: false}
    ]
  }
  
  addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });
  }

  async deleteTodo(todo: any) {
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;

    let answer = 'no';
    try {
      answer = await modal.result;
    } catch (error) {
      console.log('Modal did not return confirmation to delete.')
    }

    if (answer === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  }
}
