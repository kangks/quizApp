import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent }    from './question-list.component';
import { QuestionDetailComponent }  from './question-detail.component';
import { CreateQuestionComponent }  from './create-question.component';
import { EditQuestionComponent }  from './edit-question.component';

const heroesRoutes: Routes = [
  { path: 'questions',  component: QuestionListComponent },
  { path: 'question/:id', component: QuestionDetailComponent },
  { path: 'create-question', component: CreateQuestionComponent },
  { path: 'edit-question/:id', component: EditQuestionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionRoutingModule { }