import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";

// import { User } from './signup.service'

export class User {
    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;
    public userType: number;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // user: Observable<User>
  user = new User()
  constructor(public router: Router) { }

  ngOnInit() {
  }

  getSignUpdata(user: User){
    console.log('user details: ', user)
  }
}

// var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;