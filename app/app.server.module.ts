import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ServerPrebootModule } from 'preboot/server';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { AppModule} from './app.module';


@NgModule({
    imports: [
        ServerPrebootModule.recordEvents({ appRoot: 'app' }),
        BrowserModule.withServerTransition({ appId: 'test' }),
        ServerModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppServerModule {
}