import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from "../../_components/user-card/user-card.component";
import { User } from '../../_models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [CommonModule, RouterLink, UserCardComponent]
})
export class UsersComponent {
 // users:string[] = ['Abda', 'Baasa', 'Cadmiel', 'Dafne'];

userSelecionado: User | undefined;
userForm: FormGroup = new FormGroup({});

constructor(private fb: FormBuilder){}

users: User[] = [
  {
    nome: 'Abda',
    idade: 25
  },
  {
    nome: 'Baasa',
    idade: 28
  },
  {
    nome: 'Cadmiel',
    idade: 20
  },
  {
    nome: 'Dafne',
    idade: 37
  }
];

infoUserSelecionado(user: User ){
  this.userSelecionado = user;
}


}
