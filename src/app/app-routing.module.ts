import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedUserGuard } from './modules/shared/guards/unauthorized.guard';

const routes: Routes = [
    {
        path: 'login', loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: '', loadChildren: './modules/character/character.module#CharacterModule', canLoad: [ UnauthorizedUserGuard ],
    },
    {
        path: '**', redirectTo: '/'
    },
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )

export class AppRoutingModule {
}
