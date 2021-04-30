import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUserComponent } from './components/form-user/form-user.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [

  {path:'users', component:UsersComponent},
  {path:'form-user', component:FormUserComponent},
  {path:'form-user/:id', component:FormUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
