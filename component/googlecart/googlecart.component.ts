import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-googlecart',
  templateUrl: './googlecart.component.html',
  styleUrls: ['./googlecart.component.scss']
})
export class GooglecartComponent {
  constructor(private authservice:AuthService){}

  loginWithGoogle(){ 

    this.authservice.google();
  }
}
