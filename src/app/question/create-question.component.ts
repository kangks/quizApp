import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Question, QuestionService }  from './question.service';
import { QuestionRoutingModule } from './question-routing.module';

@Component({
  template: `
  <h2>Create a new question</h2>
  <div class="container">
  <form #questionForm="ngForm">
    <div class="form-group">
      <label for="title">Title</label><br>
      <input type="text" class="form-control" id="title"  [(ngModel)]="question.title" name="title" required>
    </div>

    <div class="form-group">
      <label for="description">Description</label><br>
      ​<textarea id="txtArea" rows="10" cols="70" class="form-control" id="description" [(ngModel)]="question.description" name="description" required></textarea>
    </div>

    <div class="form-group">
      <label for="tags">Tags</label><br>
      <input type="text" class="form-control" id="tags"  [(ngModel)]="question.tags" name="tags" required>
    </div>

    <div class="form-group">
      <label for="responses">Recommended Response</label><br>
      <input type="text" class="form-control" id="recommendedResponse"  [(ngModel)]="question.responses" name="responses" required>
    </div>
    <br>
    <button type="submit" class="btn btn-success" (click)="createQuestion(question)">Submit</button>

  </form>
</div>
  `,
})
export class CreateQuestionComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  question = new Question(5, '', '', [], [])

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionService
  ) {}

  ngOnInit() {}

  gotoQuestions(question: Question) {
    let questionId = question ? question.id : null;
    this.router.navigate(['/questions', { id: questionId}]);
  }
  createQuestion(question: Question){

      console.log(question, 'question to be created')
  }
}