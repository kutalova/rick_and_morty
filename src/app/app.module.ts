import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterListModule } from './modules/character-list/character-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        CharacterListModule,
        NgbModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
