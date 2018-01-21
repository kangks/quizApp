import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserRegistrationService} from "./signup.service";
import {CognitoCallback} from "../services/cognito.service";

export class RegistrationUser {
    name: string;
    email: string;
    password: string;
}
/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: '/signup.component.html'
})
export class RegisterComponent implements CognitoCallback {
    registrationUser: RegistrationUser;
    router: Router;
    errorMessage: string;

    constructor(public userRegistration: UserRegistrationService, router: Router) {
        this.router = router;
        this.onInit();
    }

    onInit() {
        this.registrationUser = new RegistrationUser();
        this.errorMessage = null;
    }

    onRegister() {
        this.errorMessage = null;
        this.userRegistration.register(this.registrationUser, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/confirmRegistration', result.user.username]);
        }
    }
}


// import { Observable } from 'rxjs/Observable';
// import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
// import {Component} from "@angular/core";
// import {Router} from "@angular/router";
// import {UserRegistrationService} from "./signup.service";
// import {CognitoCallback} from "../services/cognito.service"

// export class RegistrationUser {
//     name: string;
//     email: string;
//     password: string;
// }
// export class User {
//   public firstname: string;
//   public lastname: string;
//   public email: string;
//   public password: string;
//   public userType: number;
// }

// /**
//  * This component is responsible for displaying and controlling
//  * the registration of the user.
//  */
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements CognitoCallback {
//     registrationUser: User;
//     router: Router;
//     errorMessage: string;

//     constructor(public userRegistration: UserRegistrationService, router: Router) {
//         this.router = router;
//         this.onInit();
//     }

//     onInit() {
//         this.registrationUser = new User();
//         this.errorMessage = null;
//     }

//     onRegister() {
//         this.errorMessage = null;
//         this.userRegistration.register(this.registrationUser, this);
//     }

//     cognitoCallback(message: string, result: any) {
//         if (message != null) { //error
//             this.errorMessage = message;
//             console.log("result: " + this.errorMessage);
//         } else { //success
//             //move to the next step
//             console.log("redirecting");
//             this.router.navigate(['/home/confirmRegistration', result.user.username]);
//         }
//     }
// }