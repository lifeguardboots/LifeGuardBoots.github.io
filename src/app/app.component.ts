import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';


/**
 * The app component. This component is the base of s4_requirement-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    currentUser: User;
    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
 

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}





