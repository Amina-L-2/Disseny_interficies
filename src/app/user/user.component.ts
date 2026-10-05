import { Component, input , output} from '@angular/core';
import { User } from './users.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  user = input.required<User>(); //the interface we created
  select = output<string>();
  selected = input.required<boolean>();
  
  get imagePath(){
    return 'assets/users/' + this.user().avatar
  }
  
  onSelectUser(){
    this.select.emit(this.user().id);
  }
}
