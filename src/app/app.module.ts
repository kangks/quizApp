import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionModule }     from './question/question.module';
import { SignupModule }     from './auth/signup.module';

import { PageNotFoundComponent }   from './not-found.component';
import { CrisisListComponent }   from './crisis-list.component';

import {CognitoUtil} from "./services/cognito.service";

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuestionModule,
    SignupModule,
    AppRoutingModule,
  ],
  providers: [
    CognitoUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
