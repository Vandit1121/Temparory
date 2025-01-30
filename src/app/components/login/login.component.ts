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
  selector: 'app-login',
  imports: [ButtonModule, InputGroupAddonModule, InputGroupModule, PasswordModule,CardModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }



  ngOnInit(): void {
    this.login = {
      email: '',
      password: ''
    }
  }

  onLogin(){
    alert("Succes");
  }
}
