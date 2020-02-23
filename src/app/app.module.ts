import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterModule } from './modules/character/character.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        CharacterModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
