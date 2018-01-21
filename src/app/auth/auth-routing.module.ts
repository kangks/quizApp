import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }    from './signup.component';
import {RegistrationConfirmationComponent} from "./confirmRegistration.component";

const signupRoutes: Routes = [
  { path: 'signup',  component: RegisterComponent },
  {path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(signupRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignupRoutingModule { }