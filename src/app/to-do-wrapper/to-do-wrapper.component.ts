import { Component } from '@angular/core';
import { ToDoFormComponent } from "../to-do-form/to-do-form.component";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})

export class ToDoWrapperComponent {
  passedList : any;
  recieveTasksList(TasksList : any){
    console.log("resevied");
    
    this.passedList = TasksList;
  }

}
