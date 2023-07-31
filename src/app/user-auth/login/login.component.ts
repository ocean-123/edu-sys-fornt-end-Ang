import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

    
 
  constructor(private fb: FormBuilder, private authService: AuthService , private router:Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   
  }

  user: Login = {
 
    email: '',
 
    password: ''
  
  }

  onSubmit() {
    // Call the login service method
   
      // Call the login service method
      if (this.loginForm.valid) {
        const loginData = this.loginForm.value;
        this.authService.loginUser(loginData).subscribe(
          (response) => {
            // Handle successful login response here
            console.log('Login success:', response.message);
            // You can redirect to the appropriate dashboard here
            if (response.message === 'Login successful.') {
              // Redirect the user to the appropriate dashboard based on the role
              // For example:
              if (loginData.role === 'admin') {
                this.router.navigate(['/admin/dashboard']);
              } else {
                this.router.navigate(['/user/dashboard']);
              }
            }
          },
          (error) => {
            // Handle login error here
            console.log('Login error:', error);
          }
        );
      }
    }}