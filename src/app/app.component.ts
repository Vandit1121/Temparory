import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, RegisterComponent, LoginComponent, UserComponent, ToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
