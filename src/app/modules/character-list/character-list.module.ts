import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { SharedModule } from '../shared/shared.module';
import { CharacterListRoutingModule } from './character-list.routing.module';


@NgModule( {
    declarations: [ CharacterListComponent ],
    imports: [
        CommonModule,
        SharedModule,
        CharacterListRoutingModule,
    ],
    providers: [ CharacterService ]
} )
export class CharacterListModule {
}
