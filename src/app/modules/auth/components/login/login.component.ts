import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from  "@angular/router";
import { AuthService } from "../../../../services/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean;
  user:any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService, 
  ) {}

  ngOnInit(): void {
    this.initFormLogin()
  }

  /* Inicilizacion de formulario para iniciar sesion */
  initFormLogin() {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  async login(){
    this.user = await this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    console.log('usuario', this.user)
  }

  eyeBotton(){
    this.showPassword = !this.showPassword
  }


}
