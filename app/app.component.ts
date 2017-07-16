import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <div>
            <input #name />
            <button (click)="addUser(name.value)">Add</button>
        </div>
        <ul>
            <li *ngFor="let user of users">{{user.name}}</li>
        </ul>
    `
})
export class AppComponent implements OnInit {
    title = 'Hello World !!!';
    counter = 0;
    users;
    name;

    constructor(
        public http: Http, 
        @Inject(PLATFORM_ID) private platformId: Object,
        private store: Store<any>
    ) {
    }

    ngOnInit() {
        this.store.select('users').subscribe((users) => {
            console.log('>>>>>>>QQQ');
            console.log(JSON.stringify(users));
            this.users = users;
        });
    }

    addUser(name) {
        this.store.dispatch({
            type: 'ADD',
            payload: {
                name
            }
        });
    }
}