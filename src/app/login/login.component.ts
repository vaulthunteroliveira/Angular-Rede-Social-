import { Component, OnInit } from '@angular/core';
import { CredemciaisDTO } from './../models/credenciais.dto';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais: CredemciaisDTO = { email: '', senha: '' }

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.credenciais).subscribe(response => {
      this.authService.successfulLogin(response.headers.get('Authorization'));
      this.router.navigate(['/']);
    });
  }

}
