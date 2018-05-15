import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";

@Component({
    selector: "login",
    providers: [UserService],
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})

export class LoginComponent implements OnInit {

    user: User;

    constructor(private userService: UserService) {
        this.user = new User();
    }

    ngOnInit() {
    }

    login() {
        console.log('logging in...');
    }
}
