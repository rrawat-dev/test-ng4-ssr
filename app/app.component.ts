import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <button (click)="increment()">{{counter}}</button>
        <ul>
            <li *ngFor="let user of users">{{user.name}}</li>
        </ul>
    `
})
export class AppComponent implements OnInit {
    title = 'Hello World !!!';
    counter = 0;
    users;

    constructor(public http: Http, @Inject(PLATFORM_ID) private platformId: Object) {
    }

    ngOnInit() {

        let url = 'http://localhost:3300/users';
        this.http.get(url)
            .map(response => response.json())
            .subscribe(response => {
                this.users = response.users;
            });
    }

    increment() {
        this.counter += 2;
    }
}