import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { BrowserPrebootModule } from 'preboot/browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserPrebootModule.replayEvents(),
        BrowserModule.withServerTransition({appId: 'test'}),
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}