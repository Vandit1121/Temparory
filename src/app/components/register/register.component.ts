import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [ButtonModule, InputGroupAddonModule, InputGroupModule, PasswordModule,CardModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  register = {
    username: '',
    email:'',
    password: '',
    confirmPassword: ''
  }



  ngOnInit(): void {
    this.register = {
      username: '',
      email:'',
      password: '',
      confirmPassword: ''
    }
  }
  passwordMismatchValidator(){
    return true
  }
  onRegister(){
    alert("Succes");
  }
}
