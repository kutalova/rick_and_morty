import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character.routing.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';


@NgModule( {
    declarations: [
        CharacterListComponent,
        CharacterDetailsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        CharacterRoutingModule,
    ],
    providers: [ CharacterService ]
} )
export class CharacterModule {
}
