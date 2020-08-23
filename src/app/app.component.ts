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
}
