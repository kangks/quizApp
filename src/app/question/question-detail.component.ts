import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Question, QuestionService }  from './question.service';

@Component({
  template: `
  <h2>Question details:</h2>
  <div *ngIf="question$ | async as question">
    <h3>{{ question.title }}</h3>

    <h4> Description</h4>
    <div>
      {{question.description}}
    </div>

    <h4>Tags</h4>
    <div *ngFor="let tag of question.tags">
      <label>Tags: </label><a> {{ tag.tag }}</a>
    </div>

    <h4> Responses</h4>
    <div *ngFor="let response of question.responses">
      <a> {{ response }}</a>
    </div>

    <p>
      <button (click)="gotoQuestions(question)">Back</button>
    </p>
  </div>
  `,
})
export class QuestionDetailComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  question$: Observable<Question>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionService
  ) {}

  ngOnInit() {
    this.question$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getQuestion(params.get('id')));
  }

  gotoQuestions(question: Question) {
    let questionId = question ? question.id : null;
    this.router.navigate(['/questions', { id: questionId}]);
  }
}