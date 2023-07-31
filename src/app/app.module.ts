import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HomeComponent } from './home/home.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminHomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    NgbModule,
    UserAuthModule,
    ReactiveFormsModule,
    HttpClientModule
    
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
