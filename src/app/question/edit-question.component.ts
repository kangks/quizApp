import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Question, QuestionService }  from './question.service';

@Component({
  template: `
  <h2>Edit question</h2>
  <div *ngIf="question$ | async as question">
    <h3>{{ question.title }}</h3>

    <div class="form-group">
      <label for="title">Title</label><br>
      <input type="text" class="form-control" id="title"  [(ngModel)]="question.title" name="title" required>
    </div>
    <br>

    <div class="form-group">
      <label for="description">Description</label><br>
      ​<textarea id="txtArea" rows="10" cols="70" class="form-control" id="description" [(ngModel)]="question.description" name="description" required></textarea>
    </div>
    <br>

    <div class="form-group">
        <label for="tags">Tags</label><br>
        <div *ngFor="let tag of question.tags">
            <input type="text" class="form-control" id="tags"  [(ngModel)]="tag.tag" name="tags" required>
        </div>
    </div>
    <br>

    <div class="form-group">
        <label for="responses">Recommended Response</label><br>
        <input type="text" class="form-control" id="recommendedResponse"  [(ngModel)]="question.responses" name="responses" required>
    </div>
    <br>

    <p>
      <button (click)="gotoQuestions(question)">Back</button>
      <button (click)="updateQuestion(question)">Update</button>
    </p>
  </div>
  `,
})
export class EditQuestionComponent implements OnInit {
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

  updateQuestion(question: Question) {
    console.log('Update clicked', question)
  }
}