import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [CardModule, FormsModule, InputTextModule, Message, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = {
    email: '',
    password: ''
  }

  onLogin(){
    console.log(this.login);
  }

}
