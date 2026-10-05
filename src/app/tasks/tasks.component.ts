import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  user = input<string>('user');
  username = input<string>('username');

  Tasklist = [
    { id: 1, userId: 'u1', name: 'Task1', description: 'Des of Task1', status: 'Pending' },
    { id: 2, userId: 'u2', name: 'Task2', description: 'Des of Task1', status: 'Pending' },
    { id: 3, userId: 'u3', name: 'Task3', description: 'Des of Task1', status: 'Pending' },
    { id: 4, userId: 'u4', name: 'Task4', description: 'Des of Task1', status: 'Pending' },
  ]
}
/tasks.component.html'