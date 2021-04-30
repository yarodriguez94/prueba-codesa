import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { DataTransformPipe } from './pipes/data-transform.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    FormUserComponent,
    DataTransformPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
