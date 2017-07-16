import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { BrowserPrebootModule } from 'preboot/browser';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { AppState } from './reducer';

@NgModule({
    imports: [
        BrowserPrebootModule.replayEvents(),
        BrowserModule.withServerTransition({appId: 'test'}),
        HttpModule
    ],
    providers: [
        provideStore(AppState, window['data'])
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}