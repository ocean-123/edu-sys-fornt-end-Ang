import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user-auth/login/login.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './user-auth/register/register.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'admin/profile', component: AdminHomeComponent },
  { path: 'user/profile', component: UserHomeComponent },


  

  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
