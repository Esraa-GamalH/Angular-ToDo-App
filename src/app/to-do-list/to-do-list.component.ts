import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  @Input() TasksToShow : any[] = [];
  isEmpty : boolean = false;
  
  changeState(id : number){
    this.TasksToShow.filter(task => task.id == id)[0].isCompleted = true;
  }
  
  deleteTask(id : number){
    this.TasksToShow = this.TasksToShow.filter(task =>  task.id !== id);
    this.isEmpty = (this.TasksToShow.length == 0);
  }
}
