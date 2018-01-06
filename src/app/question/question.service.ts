import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Question {
  constructor(
    public id: number, 
    public title: string,
    public description: string,
    public responses: Array<any>,
    public tags: Array<any>
  ) { }
}

export const Questions: Question[] = [
    {
      id: 33,
      title: "velit mollit",
      responses: [
        "cupidatat velit amet",
        "adipisicing deserunt aliquip"
      ],
      description: "Eiusmod do reprehenderit fugiat veniam Lorem consequat commodo incididunt deserunt cillum. Id excepteur minim dolore eiusmod voluptate proident aute mollit et ad. Culpa Lorem minim anim id mollit deserunt dolore eu nostrud velit. Dolore laborum culpa laboris nulla ullamco sit dolore ea dolor dolor et Lorem nostrud. Aliquip amet nisi proident fugiat ad ut laborum id.\r\n",
      tags: [
        { id: "tag1", tag: "nisi"},
        { id: "tag2", tag: "duis"},
      ]
    },
    {
      id: 37,
      title: "reprehenderit aliquip",
      responses: [
        "pariatur dolore sit",
        "enim pariatur irure"
      ],
      description: "Deserunt adipisicing ullamco quis officia duis consequat in eiusmod. Exercitation aliquip velit est nulla. Laborum quis exercitation sunt laboris irure laborum laboris nisi pariatur cillum. Tempor eu Lorem cillum est labore voluptate voluptate ea quis officia consequat. Veniam consectetur deserunt voluptate eiusmod ullamco. Dolor adipisicing eu irure dolore elit consectetur. In do sint eu pariatur.\r\n",
      tags: [
        { id: "tag3", tag: "nisi1"},
        { id: "tag4", tag: "duis2"},
      ]
    },
    {
      id: 33,
      title: "officia aliqua",
      responses: [
        "quis cillum magna",
        "amet consectetur nisi"
      ],
      description: "Eiusmod sit adipisicing aliqua mollit dolore ad mollit est. Minim irure consectetur enim aliquip mollit anim nulla Lorem officia nulla fugiat. Aute in Lorem nulla ipsum duis labore do qui anim tempor esse. Ea laboris mollit excepteur id cupidatat fugiat irure nisi nostrud. Officia voluptate duis laborum velit labore consequat duis esse adipisicing. Sit culpa do Lorem velit eiusmod irure esse nisi ex in sunt.\r\n",
      tags: [
        { id: "tag5", tag: "tempor"},
        { id: "tag6", tag: "ullamco"},
      ]
    }
  ]

@Injectable()
export class QuestionService {
  getQuestions() { return Observable.of(Questions); }

  getQuestion(id: number | string) {
    return this.getQuestions()
      // (+) before `id` turns the string into a number
      .map(questions => questions.find(question => question.id === +id));
  }
}



