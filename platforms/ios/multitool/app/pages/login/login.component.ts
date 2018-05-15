import {Component, OnInit} from "@angular/core";

@Component({
    selector: "login",
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})

export class LoginComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

    login() {
        console.log('logging in...');
    }
}
