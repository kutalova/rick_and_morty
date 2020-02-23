import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';


@NgModule( {
    declarations: [ CharacterListComponent ],
    imports: [
        CommonModule
    ],
    exports: [ CharacterListComponent ],
    providers: [ CharacterService ]
} )
export class CharacterListModule {
}
