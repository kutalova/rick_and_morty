import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterModule } from './modules/character/character.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { LoginModule } from './modules/login/login.module';
import { UnauthorizedUserGuard } from './modules/shared/guards/unauthorized.guard';
import { NgtUniversalModule } from '@ng-toolkit/universal';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        LoginModule,
        CharacterModule,
        HttpClientModule,
        AppRoutingModule,
        NgtUniversalModule,
    ],
    providers: [UnauthorizedUserGuard],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
