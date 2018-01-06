import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionModule }     from './question/question.module';

import { PageNotFoundComponent }   from './not-found.component';
import { CrisisListComponent }   from './crisis-list.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuestionModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
