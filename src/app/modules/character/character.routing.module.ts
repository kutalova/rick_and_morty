import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [ {
    path: '', component: CharacterListComponent
},
    {
        path: 'details/:id', component: CharacterDetailsComponent, outlet: 'details'

    } ];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )

export class CharacterRoutingModule {

}
