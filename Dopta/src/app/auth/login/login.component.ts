import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../service/token.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
        console.log(this.loginUsuario.password);

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/index']);
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
