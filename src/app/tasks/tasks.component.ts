import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  name = "Task List";
  Tasklist = [
    {id:1, name: 'Task1', description: 'Des of Task1', status: 'Pending'},
    {id:2, name: 'Task2', description: 'Des of Task1', status: 'Pending'},
    {id:3, name: 'Task3', description: 'Des of Task1', status: 'Pending'},
    {id:4, name: 'Task4', description: 'Des of Task1', status: 'Pending'},    
  ]
}
