import { User } from './../../_models/user';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output() userInfoEmiter = new EventEmitter<User>();

  retornarDados(){
    this.userInfoEmiter.emit(this.user);
  }
}
