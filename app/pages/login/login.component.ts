import {Component, OnInit} from "@angular/core";
import {SpotifyAuthService} from "../../shared/spotify/spotify.service";
import {Page} from "tns-core-modules/ui/page";
import {TNSSpotifyPlayer} from "nativescript-spotify";

@Component({
    selector: "login",
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})

export class LoginComponent implements OnInit {

    spotifyPlayer: TNSSpotifyPlayer;

    constructor(private spotifyAuthService: SpotifyAuthService, private page: Page) {}

    ngOnInit() {
        this.page.actionBarHidden = true;
        // this.page.backgroundImage = "res://bg_login";
    }

    login() {
        console.log('logging in...');
        this.spotifyPlayer = new TNSSpotifyPlayer();
        this.spotifyPlayer.initPlayer(true);
        this.spotifyPlayer.events.on('authLoginSuccess', (eventData) => {
            console.log(eventData);
            console.log("SUCCES!");
        });
        this.spotifyAuthService.login();
    }
}
