import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RegisterComponent }    from './signup.component';
import { UserRegistrationService } from './signup.service';
import { SignupRoutingModule } from './auth-routing.module';
import {RegistrationConfirmationComponent} from "./confirmRegistration.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignupRoutingModule
  ],
  declarations: [
    RegistrationConfirmationComponent,
    RegisterComponent
  ],
  providers: [ UserRegistrationService ]
})
export class SignupModule {}