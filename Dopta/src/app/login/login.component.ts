import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    thelephone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  matcher: any;
  hide = true;
  ngOnInit(): void {
  }

}
