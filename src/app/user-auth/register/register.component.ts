import { Component, OnInit } from '@angular/core';
import { UserAuth } from '../../models/user-auth.model';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;

    
 
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
    });
  }

  user: UserAuth = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    mobileNo: '',
    password: '',
    confirm_password: '',
  }

  registerUser() {
    // Add any additional validation logic here (e.g., password match validation)

    // Send the registration data to the backend API
    if (this.registerForm.invalid) {
      return;
    }

    // Ensure that the passwords match before sending the data
    if (this.registerForm.value.password !== this.registerForm.value.confirm_password) {
      alert('Passwords do not match.');
      return;
    }

    const user: UserAuth = this.registerForm.value;

    this.authService.registerUser(user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // Redirect to the login page after successful registration
        // You need to import Router from @angular/router
        // this.router.navigate(['/login']);  
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
