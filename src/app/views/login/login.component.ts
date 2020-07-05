import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  nombreUsuario: string;
  password: string;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.authService.loggedIn()){
      this.router.navigate(['posts']).then(() => {});
    }
  }

  onLogin(): void {
    this.authService.login({ nombreUsuario: this.nombreUsuario, password: this.password}).subscribe(() => {
      this.router.navigate(['posts']).then(() => {});
    });
  }

}
