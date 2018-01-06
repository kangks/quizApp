// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Question, QuestionService }  from './question.service';

@Component({
  template: `
    <h2>Questions</h2>
    <ul class="items">
      <li *ngFor="let question of questions$ | async"
        [class.selected]="question.id === selectedId">
        <a [routerLink]="['/question', question.id]">
          {{ question.title }}
        </a>
        <p>
        {{ question.description }}
        </p>
        <div *ngFor="let tag of question.tags">
            <a> {{ tag.tag }}</a>
        </div>
        <a> {{ question.responses.length || 0 }} responses</a>

        <a [routerLink]="['/edit-question', question.id]">
          Edit
        </a>
      </li>
    </ul>
  `
})
export class QuestionListComponent implements OnInit {
  questions$: Observable<Question[]>;

  private selectedId: number;

  constructor(
    private service: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.questions$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getQuestions();
      });
  }
}