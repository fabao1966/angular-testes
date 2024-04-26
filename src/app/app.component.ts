import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { BaseUIComponent } from "./_components/base-ui/base-ui.component";
import { UsersComponent } from "./pages/users/users.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, CommonModule, BaseUIComponent, UsersComponent]
})
export class AppComponent {
  title = 'Angular Testes';
}
