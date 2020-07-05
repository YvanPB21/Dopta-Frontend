import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { this.buildForm(); }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.tokenService.getToken());
        this.tokenService.setUserId(decodedToken.jti);
        this.router.navigate(['/posts']);

      },
      err => {
        this.isLogged = false;
        console.log(err.error.message);
      }
    );
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
