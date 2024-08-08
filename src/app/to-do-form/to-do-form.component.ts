import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  tasksList: {id: number, name: string, isCompleted: boolean}[] = [];
  taskHolder: string = "";
  taskId: number = 1;
  @Output() sendTasksList = new EventEmitter ();


  setTask(event : any){
    const newTask = event.target.value;
    this.taskHolder = newTask;
  }

  saveTask(){
    const ListHolder = {
      id: this.taskId++,
      name: this.taskHolder,
      isCompleted: false
    }

    // if (!this.tasksList.includes(this.taskHolder) && this.taskHolder !== ""){
    //   this.tasksList.push(this.taskHolder);
    // }
    this.tasksList.push(ListHolder);
    this.sendTasksList.emit(this.tasksList);
  }
}
