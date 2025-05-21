import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [CardModule, FormsModule, InputTextModule, Message, PasswordModule, ButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = {
    email: '',
    password: ''
  }

  private authSService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  onLogin(){
    const {email, password} = this.login;
    this.authSService.getUserDetails(email, password).subscribe({
      next: (response) => {
        if(response.length >= 1){
          sessionStorage.setItem('email', email);
          this.router.navigate(['home']);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Login successful'});
        }
        else{
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid credentials'});
        }
      },
      error: (error) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong'});
      }
    });
  }

}
