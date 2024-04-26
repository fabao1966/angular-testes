import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {

  num:number=1;

  ngDoCheck(){
    console.log("Mudança detectada...");
  }

  adiciona(){
    this.num++;
  }

}
