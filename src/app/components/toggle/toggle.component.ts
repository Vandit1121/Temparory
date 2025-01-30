import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toggle',
  imports: [LoginComponent,CommonModule, RegisterComponent,NgIf],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  isRegisterVisible: boolean = false;

  toggleForm() {
    this.isRegisterVisible = !this.isRegisterVisible;
  }
}


