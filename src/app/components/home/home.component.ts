import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router = inject(Router);
  private messageService = inject(MessageService);

  logout(){
    sessionStorage.removeItem('email');
    this.router.navigate(['login']);
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Logout successful'});
  }

}
