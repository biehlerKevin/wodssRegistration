import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'sd-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string;
    password: string;

    showError: boolean = false;

    constructor(/**private authService: AuthenticationService**/) {
    }


    login(): void {
    }
}